import ProductTags from "@/components/articles/product-tags";
import ProductsCarousel from "@/components/articles/products-carousel";
import { db } from "@/server";
import Image from "next/image";

export default async function NewsSection() {
  const data = await db.query.productVariants.findMany({
    with: {
      variantImages: true,
      variantTags: true,
      product: true,
    },
    orderBy: (productVariants, { desc }) => [desc(productVariants.id)],
  });

  return (
    <>
      <div className="flex flex-col  justify-center pt-16">
        {/* Middle Cell - Image (1/3) */}
        <div className="flex flex-1 items-center justify-between">
          <h1 className="inline-flex w-1/4">./News</h1>
          <Image
            src="/arlo/arloNews.png" // Replace with your image path
            alt="News Image"
            width={150} // Adjust as needed
            height={100} // Adjust as needed
            className="object-cover rounded-lg w-1/6"
          />
          <div className="w-1/4" />
        </div>

        {/* Right Cell - ./News Text (1/3) */}
        <div className=""></div>

        {/* Additional Content (Product Tags and Carousel) */}

        <div className="w-full max-w-7xl flex justify-start mb-3 ml-8">
          <ProductTags />
        </div>
        <div className="border-t border-gray-600 mb-2"></div>
        <ProductsCarousel variants={data} />
        <div className="border-t  border-gray-600 mb-2"></div>
      </div>
    </>
  );
}
