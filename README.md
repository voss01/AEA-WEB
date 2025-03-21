
## Getting Started

put in aea-web folder the .env.local file

then, run the development server:

```bash

npm i
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


# **Next.js + Zod + Neon DB + Drizzle ORM: A quick documentation**

## **Introduction**
This guide explains how to set up a full-stack Next.js application using **Neon DB**, **Drizzle ORM**, and **Zod** for schema validation. We will also cover **Server-Side Rendering (SSR)**, **Server Actions**, and how **Vercel** runs server-side operations.

---

## **Backend**

### **Tech Stack**
- **Neon DB**: A scalable, serverless PostgreSQL database.
- **Drizzle ORM**: A TypeScript-friendly database ORM for Neon DB.
- **AWS (via Vercel)**: For deployment and serverless functions.
- **Zod**: Schema validation and type inference.

### **Understanding Server-Side Rendering (SSR) in Next.js**
**SSR (Server-Side Rendering)** means that the page is rendered on the server **before** being sent to the client. This improves performance by generating fresh content on each request, making it ideal for:
- Fetching real-time data from databases (Neon DB).
- Displaying dynamic content (e.g., latest blog posts or products).
- Handling SEO-sensitive pages.

In Next.js, you can enable SSR by using the `getServerSideProps` function in older versions or using `fetch()` and `async` functions in Server Components (recommended in Next.js 13+).

Example of SSR in Next.js:
```tsx
"use server";

import { db } from "@/server/db";
import { products } from "@/server/schema";

export default async function ProductsPage() {
  const allProducts = await db.select().from(products);
  return (
    <div>
      <h1>All Products</h1>
      {allProducts.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}
```
This ensures that the `ProductsPage` is **pre-rendered on the server** before being sent to the browser.

### **Where to Use `"use server"`?**
- Inside API routes or server actions (`server/actions/create-article.ts`).
- When fetching data from Neon DB (`server/schema.ts`).
- In route handlers (`app/api/...`).

---

## **Database Schema**
The PostgreSQL schema is stored in `server/schema.ts` and defines the structure of our `products` table:

```ts
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  link: text("link"),
  created: timestamp("created").defaultNow().notNull(),
});
```

---

## **Schema Validation with Zod**
We use **Zod** to define the structure of the data and validate it before storing it in the database.

The Zod schema is in `types/article-schema.ts`, mirroring the database schema:

```ts
import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(5, { message: "Title must be at least 5 characters long" }),
  link: z.string().optional(),
  description: z.string().min(40, { message: "Description must be at least 40 characters long" }),
});

export type zProductSchema = z.infer<typeof ProductSchema>;
```

---

## **Frontend**

### **Where to Use `"use client"`?**
- Any component that uses state, event handlers, or React hooks.
- Forms that require user input (`article-form.tsx`).
- Components with interactive elements like buttons or dropdowns.

Add this at the top of `article-form.tsx` to mark it as a Client Component:
```tsx
"use client";
```

### **Zod Type Inference in Forms**
We integrate Zod with React Hook Form for type validation:

```tsx
const form = useForm<zProductSchema>({
  resolver: zodResolver(ProductSchema),
  defaultValues: {
    title: "",
    link: "",
    description: "",
  },
  mode: "onChange",
});
```

### **Form Submission & Server Actions**

An asynchronous function handles form submission:
```tsx
async function onSubmit(values: zProductSchema) {
  execute(values);
}
```

When the form is submitted, it triggers the `createArticle` server function:
```tsx
<Button className="w-full" disabled={status === "executing" || !form.formState.isValid || !form.formState.isDirty} type="submit">
  Submit
</Button>
```

---

## **Server Actions & Vercel**

### **What Are Server Actions?**
Server actions allow you to run backend logic **directly inside a React component**. They eliminate the need for API routes and make data fetching & mutations more efficient.

Example:
```tsx
"use server";

import { db } from "@/server/db";
import { products } from "@/server/schema";

export const createProduct = async ({ title, description, link }) => {
  try {
    const newProduct = await db.insert(products).values({ title, description, link }).returning();
    return { success: `Article ${newProduct[0].title} has been created` };
  } catch (err) {
    return { error: "Failed to create article" };
  }
};
```

### **How Vercel Works with Server Actions**
Vercel runs **Server Actions** as **serverless functions on AWS Lambda**. When a server action is triggered:
1. Next.js calls the function.
2. Vercel spins up a temporary AWS Lambda instance.
3. The function executes and returns a response.
4. The instance is automatically shut down, optimizing performance and cost.

This ensures **scalability**, meaning your app can handle thousands of requests without dedicated servers.

### **Why Use Vercel?**
- **Automatic Scaling**: Serverless functions scale based on demand.
- **Fast Execution**: AWS Lambda provides low-latency execution.
- **No Manual Deployment**: Pushing code to GitHub automatically redeploys your app.

---

### **Final Thoughts**
- **Use `"use server"`** for data fetching, authentication, and database operations.
- **Use `"use client"`** for forms, buttons, stateful components, and user interactions.
- **Server actions** simplify API management by running backend logic directly in React components.
- **Vercel & AWS** optimize performance by running server actions as scalable serverless functions.
- **Drizzle ORM** simplifies database queries, and **Zod** ensures type safety.
- **Neon DB** provides a powerful cloud-hosted PostgreSQL solution.

This setup ensures optimal performance and scalability in Next.js! 🚀








## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
