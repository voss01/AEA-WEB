

import ProductTags from "@/components/articles/product-tags";
import Products from "@/components/articles/products";
import { db } from "@/server";
import ProductsCarousel from "@/components/articles/products-carousel";

export const revalidate = 60 * 60;

export default async function LandingPage() {
  const data = await db.query.productVariants.findMany({
    with: {
      variantImages: true,
      variantTags: true,
      product: true,
    },
    orderBy: (productVariants, { desc }) => [desc(productVariants.id)],
  });

  return (
    <div className="">
      
      <ProductTags />
      <Products variants={data} />

      
    </div>
  );
}
