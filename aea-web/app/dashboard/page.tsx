'use server'
import { redirect } from "next/navigation";

export default async function DashbboardPage() {
  redirect("/dashboard/settings");
}
