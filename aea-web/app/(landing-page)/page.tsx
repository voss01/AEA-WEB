
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import SixthSection from "./sixth-section";
import SeventhSection from "./seventh-section";
import GetStartedFree from "./eighth-section";
import Footer from "@/components/footer";




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
      <HeroSection />

      <SecondSection />
      <ProductTags />
      <ProductsCarousel variants={data} />
      
      <SixthSection />

      <GetStartedFree />

    </div>
  );
}
 
