import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import ArticleForm from "./article-form";

export default async function AddProduct() {
  const session = await auth();
  if (session?.user.role !== "admin") return redirect("/dashboard/settings");

  return <ArticleForm />;
}
