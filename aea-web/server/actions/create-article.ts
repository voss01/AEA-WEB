"use server"

import { ProductSchema } from "@/types/article-shema"
import { createSafeActionClient } from "next-safe-action"
import { db } from ".."
import { eq } from "drizzle-orm"
import { products } from "../schema"
import { revalidatePath } from "next/cache"

const action = createSafeActionClient()


export const createProduct = action.schema(ProductSchema).action(
    async ({ parsedInput: { description, title, link, id } }) => {

    try {
      //EDIT MODE
      if (id) {
        const currentProduct = await db.query.products.findFirst({
          where: eq(products.id, id),
        })
        if (!currentProduct) return { error: "article not found" }
        const editedProduct = await db
          .update(products)
          .set({ description, title, link })
          .where(eq(products.id, id))
          .returning()
        revalidatePath("/dashboard/articles")
        revalidatePath("/") 
        return { success: `Article ${editedProduct[0].title} has been edited` }
      }
      if (!id) {
        const newProduct = await db
          .insert(products)
          .values({ description, title, link })
          .returning()
        revalidatePath("/dashboard/articles")
        revalidatePath("/")
        return { success: `Article ${newProduct[0].title} has been created` }
      }
    } catch (err) {
      return { error: "Failed to create article" }
    }
  }
)