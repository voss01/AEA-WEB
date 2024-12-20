

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
      
      <div className="mt-6 mb-6 flex-1 text-5xl font-bold xl:text-7xl flex justify-center items-center">
          ./News
        </div>
           
            <div className="border-t border-gray-600 mb-2"></div>
            <ProductsCarousel variants={data} tag="news" />
            <div className="border-t  border-gray-600 mb-2"></div>
    
            <div className="mt-14 mb-6 flex-1 text-5xl font-bold xl:text-7xl flex justify-center items-center">
          ./Recruitment
        </div>
       
            <div className="border-t border-gray-600 mb-2"></div>
            <ProductsCarousel variants={data} tag="recruitment"/>
            <div className="border-t  border-gray-600 mb-2"></div>

           
      
    </div>
  );
}
