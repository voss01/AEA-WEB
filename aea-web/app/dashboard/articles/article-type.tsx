"use client";

import { VariantsWithImagesTags } from "@/lib/infer-type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VariantSchema } from "@/types/variant-schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import VariantImages from "./variant-images";
import { useAction } from "next-safe-action/hooks";
import { createVariant } from "@/server/actions/create-category";
import { toast } from "sonner";
import { forwardRef, useEffect, useState } from "react";
import { deleteVariant } from "@/server/actions/delete-category";




import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "news",
    label: "news",
  },
  {
    value: "recruitment",
    label: "recruitment",
  },

];
 




type VariantProps = {
  children: React.ReactNode;
  editMode: boolean;
  productID?: number;
  variant?: VariantsWithImagesTags;
};

export const ProductVariant = forwardRef<HTMLDivElement, VariantProps>(
  ({ children, editMode, productID, variant }, ref) => {
    const form = useForm<z.infer<typeof VariantSchema>>({
      resolver: zodResolver(VariantSchema),
      defaultValues: {
        variantImages: [],
        color: "#16ed48",
        editMode,
        id: undefined,
        productID,
        productType: "news",
      },
    });

      const [open, setOpen] = React.useState(false);
      const [value, setValue] = React.useState("");

    const [open_popOver, setOpen_popOver] = useState(false);

    const setEdit = () => {
      if (!editMode) {
        form.reset();
        return;
      }
      if (editMode && variant) {
        form.setValue("editMode", true);
        form.setValue("id", variant.id);
        form.setValue("productID", variant.productID);
        form.setValue("productType", variant.productType);
        form.setValue("color", variant.color);
        
        form.setValue(
          "variantImages",
          variant.variantImages.map((img) => ({
            name: img.name,
            size: img.size,
            url: img.url,
          }))
        );
      }
    };

    useEffect(() => {
      setEdit();
    }, [variant]);

    const { execute, status } = useAction(createVariant, {
      onExecute() {
        toast.loading("Creating variant", { duration: 1 });
        setOpen(false);
      },
      onSuccess(data) {
        if (data?.data?.error) {
          toast.error(data.data?.error);
        }
        if (data?.data?.success) {
          toast.success(data.data?.success);
        }
      },
    });

    const variantAction = useAction(deleteVariant, {
      onExecute() {
        toast.loading("Deleting variant", { duration: 1 });
        setOpen(false);
      },
      onSuccess(data) {
        if (data?.data?.error) {
          toast.error(data.data?.error);
        }
        if (data?.data?.success) {
          toast.success(data.data?.success);
        }
      },
    });

    function onSubmit(values: z.infer<typeof VariantSchema>) {
      // Do something with the form values.
      // This will be type-safe and validated.

      execute(values);
    }

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="lg:max-w-screen-lg overflow-y-scroll max-h-[560px]">
          <DialogHeader>
            <DialogTitle>
              {editMode ? "Edit" : "Create"} your article category and Images
            </DialogTitle>
            <DialogDescription>
              Add a category to your article
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="productType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Category </FormLabel>
                    <FormControl>
                      <Popover
                        open={open_popOver}
                        onOpenChange={setOpen_popOver}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[200px] justify-between"
                          >
                            {field.value
                              ? frameworks.find(
                                  (framework) => framework.value === field.value
                                )?.label
                              : "Select category..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandList>
                              <CommandEmpty>No category found</CommandEmpty>
                              <CommandGroup>
                                {frameworks.map((framework) => (
                                  <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                      const newValue =
                                        currentValue === field.value
                                          ? ""
                                          : currentValue;
                                      setValue(newValue); // Update the local state
                                      field.onChange(newValue); // Update the form field value
                                      setOpen_popOver(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        field.value === framework.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    {framework.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <VariantImages />
              <div className="flex gap-4 items-center justify-center">
                {editMode && variant && (
                  <Button
                    variant={"destructive"}
                    type="button"
                    disabled={variantAction.status === "executing"}
                    onClick={(e) => {
                      e.preventDefault();
                      variantAction.execute({ id: variant.id });
                    }}
                  >
                    Delete Category
                  </Button>
                )}
                <Button
                  disabled={
                    status === "executing" ||
                    !form.formState.isValid ||
                    !form.formState.isDirty
                  }
                  type="submit"
                >
                  {editMode ? "Update Category" : "Create Category"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  }
);

ProductVariant.displayName = "ProductVariant";
