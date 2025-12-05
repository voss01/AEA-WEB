//import ProductTags from "@/components/articles/product-tags";
//import Products from "@/components/articles/products";

import ProductsCarousel from "@/components/articles/products-carousel";
import FilteredProductsDisplay from "@/components/articles/products-filter";

import { db } from "@/server";

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
  const full_data = data.concat(data).concat(data).concat(data);

  return (
    <div className="pl-14 pt-14">
      {/* Title section */}
      <div>
        <h1>./Blog</h1>
        <div className="subtitle">Discover and stay tuned on news and more</div>
      </div>

      {/* Latest section */}
      <div className="py-10">
        <div className="py-10 flex flex-row items-center">
          <svg
            className="w-6 h-6 text-aea-orange dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 21"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM4 3 3 2M2 7H1m15-4 1-1m1 5h1M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z"
            ></path>
          </svg>
          <h2 className="ml-5">Latest</h2>
        </div>
        <ProductsCarousel variants={full_data} tag="" />
      </div>

      {/* All Articles section */}
      <div className="pt-10 flex flex-row items-center">
        <h2>All Articles</h2>
      </div>
      <FilteredProductsDisplay variants={full_data} />
    </div>
  );
}
