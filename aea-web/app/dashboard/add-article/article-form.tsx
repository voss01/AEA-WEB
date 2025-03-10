"use client";

import { useForm } from "react-hook-form";
import { zProductSchema, ProductSchema } from "@/types/article-shema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar} from "lucide-react";
import Tiptap from "./tiptap";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { createProduct } from "@/server/actions/create-article";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { getProduct } from "@/server/actions/get-article";
import { useEffect } from "react";

export default function ArticleForm() {
  const form = useForm<zProductSchema>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: "",
      link:"",
      description: "",
    },
    mode: "onChange",
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const editMode = searchParams.get("id");

  const checkProduct = async (id: number) => {
    if (editMode) {
      const data = await getProduct(id);
      if (data.error) {
        toast.error(data.error);
        router.push("/dashboard/articles");
        return;
      }
      if (data.success) {
        const id = parseInt(editMode);
        form.setValue("title", data.success.title);
        form.setValue("link", data.success.link ?? ""); 
        form.setValue("description", data.success.description);
        form.setValue("id", id);
      }
    }
  };

  useEffect(() => {
    if (editMode) {
      checkProduct(parseInt(editMode));
    }
  }, []);

  const { execute, status } = useAction(createProduct, {
    onSuccess: (data) => {
       toast.dismiss();
      if (data?.data?.error) {
        toast.error(data?.data?.error);
      }
      if (data?.data?.success) {
        router.push("/dashboard/articles");
        toast.success(data?.data?.success);
      }
    },
    onExecute: (data) => {
      if (editMode) {
        toast.loading("Editing Article");
      }
      if (!editMode) {
        toast.loading("Creating Article");
      }
    },
  });

  async function onSubmit(values: zProductSchema) {
    execute(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{editMode ? "Edit Article" : "Create Article"}</CardTitle>
        <CardDescription>
          {editMode
            ? "Make changes to existing Article"
            : "Add a brand new Article"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Article Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Article title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Article link</FormLabel>
                  <FormControl>
                    <Input placeholder="Article link" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Article Content</FormLabel>
                  <FormControl>
                    <Tiptap val={field.value} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button
              className="w-full"
              disabled={
                status === "executing" ||
                !form.formState.isValid ||
                !form.formState.isDirty
              }
              type="submit"
            >
              {editMode ? "Save Changes" : "Create Article"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
