ALTER TABLE "articles" RENAME TO "products";--> statement-breakpoint
ALTER TABLE "products" RENAME COLUMN "date" TO "price";--> statement-breakpoint
ALTER TABLE "orderProduct" DROP CONSTRAINT "orderProduct_productID_articles_id_fk";
--> statement-breakpoint
ALTER TABLE "productVariants" DROP CONSTRAINT "productVariants_productID_articles_id_fk";
--> statement-breakpoint
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_productID_articles_id_fk";
--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "price" SET DATA TYPE real;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "orderProduct" ADD CONSTRAINT "orderProduct_productID_products_id_fk" FOREIGN KEY ("productID") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productVariants" ADD CONSTRAINT "productVariants_productID_products_id_fk" FOREIGN KEY ("productID") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reviews" ADD CONSTRAINT "reviews_productID_products_id_fk" FOREIGN KEY ("productID") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
