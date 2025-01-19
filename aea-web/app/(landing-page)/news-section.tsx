import ProductTags from '@/components/articles/product-tags';
import ProductsCarousel from '@/components/articles/products-carousel';
import Image from 'next/image';
import React from 'react';
import { db } from "@/server";

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
<div className="flex-1 flex justify-center">
  <Image
    src="/arlo/arloNews.png" // Replace with your image path
    alt="News Image"
    width={150} // Reduced width
    height={100} // Reduced height
    className="object-cover rounded-lg"
  />
</div>

{/* Right Cell - ./News Text (1/3) */}
<div className="flex-1 font-bold flex justify-center items-center">
  <span className="text-7xl md:text-8xl xl:text-9xl">./News</span>
</div>

      {/* Additional Content (Product Tags and Carousel) */}
   
         <div className="w-full max-w-7xl flex justify-start mb-3 ml-8">
        <ProductTags />
      </div>
      <div className="border-t border-gray-600 mb-2"></div>
      <ProductsCarousel variants={data} />
      <div className="border-t  border-gray-600 mb-2"></div>
    </div></>
  );
}
