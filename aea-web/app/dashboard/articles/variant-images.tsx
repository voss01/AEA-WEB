"use client";

import { VariantSchema } from "@/types/variant-schema";
import { useFieldArray, useFormContext } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UploadDropzone } from "@/app/api/uploadthing/upload";
import { UploadButton } from "@/app/api/uploadthing/upload"; // Import UploadButton
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Reorder } from "framer-motion";
import { useState, useEffect } from "react";

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default function VariantImages() {
  const { getValues, control, setError } =
    useFormContext<z.infer<typeof VariantSchema>>();

  const { fields, remove, append, update, move } = useFieldArray({
    control,
    name: "variantImages",
  });

  const [active, setActive] = useState(0);
  console.log(getValues());
  // Use the useIsMobile hook to determine if the screen is mobile
  const isMobile = useIsMobile();

  return (
    <div>
      <FormField
        control={control}
        name={"variantImages"}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Upload an image</FormLabel>
            <FormControl>
              {isMobile ? (
                <UploadButton
                  className="scale-75 ut-button:ring-primary  ut-label:bg-red-50  ut-button:bg-primary/75  hover:ut-button:bg-primary/100 ut:button:transition-all ut-button:duration-500  ut-label:hidden ut-allowed-content:hidden"
                  endpoint="avatarUploader"
                  onBeforeUploadBegin={(files) => {
                    files.map((file) =>
                      append({
                        name: file.name,
                        size: file.size,
                        url: URL.createObjectURL(file),
                      })
                    );
                    return files;
                  }}
                  onUploadError={(error) => {
                    console.log(error);
                    setError("variantImages", {
                      type: "validate",
                      message: error.message,
                    });
                    return;
                  }}
                  onClientUploadComplete={(files) => {
                    const images = getValues("variantImages");
                    images.map((field, imgIDX) => {
                      if (field.url.search("blob:") === 0) {
                        const image = files.find(
                          (img) => img.name === field.name
                        );
                        if (image) {
                          update(imgIDX, {
                            url: image.url,
                            name: image.name,
                            size: image.size,
                            key: image.key,
                          });
                        }
                      }
                    });
                    return;
                  }}
                  content={{
                    button({ ready }) {
                      if (ready) return <div>Upload image</div>;
                      return <div>Uploading...</div>;
                    },
                  }}
                />
              ) : (
                <UploadDropzone
                  className=" ut-allowed-content:text-secondary-foreground ut-label:text-primary ut-upload-icon:text-primary/50 hover:bg-primary/10 transition-all duration-500 ease-in-out border-secondary ut-button:bg-primary/75 ut-button:ut-readying:bg-secondary "
                  onUploadError={(error) => {
                    console.log(error);
                    setError("variantImages", {
                      type: "validate",
                      message: error.message,
                    });
                    return;
                  }}
                  onBeforeUploadBegin={(files) => {
                    files.map((file) =>
                      append({
                        name: file.name,
                        size: file.size,
                        url: URL.createObjectURL(file),
                      })
                    );
                    return files;
                  }}
                  onClientUploadComplete={(files) => {
                    const images = getValues("variantImages");
                    images.map((field, imgIDX) => {
                      if (field.url.search("blob:") === 0) {
                        const image = files.find(
                          (img) => img.name === field.name
                        );
                        if (image) {
                          update(imgIDX, {
                            url: image.url,
                            name: image.name,
                            size: image.size,
                            key: image.key,
                          });
                        }
                      }
                    });
                    return;
                  }}
                  config={{ mode: "auto" }}
                  endpoint="variantUploader"
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="rounded-md overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              {!isMobile && <TableHead>Name</TableHead>}{" "}
              {/* Conditionally render Name */}
              {!isMobile && <TableHead>Size</TableHead>}{" "}
              {/* Conditionally render Size */}
              <TableHead>Image</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <Reorder.Group
            as="tbody"
            values={fields}
            onReorder={(e) => {
              const activeElement = fields[active];
              e.map((item, index) => {
                if (item === activeElement) {
                  move(active, index);
                  setActive(index);
                  return;
                }
                return;
              });
            }}
          >
            {fields.map((field, index) => {
              return (
                <Reorder.Item
                  as="tr"
                  key={field.id}
                  value={field}
                  id={field.id}
                  onDragStart={() => setActive(index)}
                  className={cn(
                    field.url.search("blob:") === 0
                      ? "animate-pulse transition-all"
                      : "",
                    "text-sm font-bold text-muted-foreground hover:text-primary"
                  )}
                >
                  <TableCell>{index}</TableCell>
                  {!isMobile && <TableCell>{field.name}</TableCell>}{" "}
                  {/* Conditionally render Name */}
                  {!isMobile && (
                    <TableCell>
                      {(field.size / (1024 * 1024)).toFixed(2)} MB
                    </TableCell>
                  )}
                  <TableCell>
                    <div className="flex items-center justify-center">
                      <Image
                        src={field.url}
                        alt={field.name}
                        className="rounded-md"
                        width={72}
                        height={48}
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant={"ghost"}
                      onClick={(e) => {
                        e.preventDefault();
                        remove(index);
                      }}
                      className="scale-75"
                    >
                      <Trash className="h-4" />
                    </Button>
                  </TableCell>
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
        </Table>
      </div>
    </div>
  );
}
