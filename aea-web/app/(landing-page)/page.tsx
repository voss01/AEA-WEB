
import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import SixthSection from "./sixth-section";

import GetStartedFree from "./eighth-section";
import Footer from "@/components/footer";




import ProductTags from "@/components/articles/product-tags";
import Products from "@/components/articles/products";
import { db } from "@/server";
import ProductsCarousel from "@/components/articles/products-carousel";
import NewsSection from "./news-section";
import ResultsSection from "./results-section";

export const revalidate = 60 * 60;




export default async function LandingPage() {
 

  return (
    <div className="">
      <HeroSection />

      <NewsSection />
      

      <SecondSection />
   


      
      <SixthSection />

      <GetStartedFree />

    </div>
  );
}
 
