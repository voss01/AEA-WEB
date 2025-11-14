import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});
export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./server/schema.ts",
  out: "./server/migrations",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_POSTGRES_URL!,
  },
});
