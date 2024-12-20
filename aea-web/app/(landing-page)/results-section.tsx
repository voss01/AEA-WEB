import ProductTags from '@/components/articles/product-tags';
import ProductsCarousel from '@/components/articles/products-carousel';
import Image from 'next/image';
import React from 'react';
import { db } from "@/server";
import { Button } from '@/components/ui/button';
import { PiArrowRight } from 'react-icons/pi';

export default async function ResultsSection() {

  return (
    <>
      
    <div className="flex flex-col  justify-center pt-16">
   
      {/* Outer Section Divided into 3 Equal Parts */}
      <div className="flex w-full max-w-7xl mb-8">
        {/* Left Cell - Empty space (1/3) */}

        <div className="flex-1 text-5xl font-bold xl:text-6xl flex justify-center items-center">
          ./Risultati Ottenuti
        </div>
       

        {/* Middle Cell - Image (1/3) */}
        <div className="flex-1 flex justify-center">
          
        </div>
       

        {/* Right Cell - ./News Text (1/3) */}
        <div className="flex-1"></div>
       <Button className="py-1 mt-2 text-center">
                       <div className="flex items-center justify-center">
                         <div className="text-lg">Scopri</div>
                         <div><PiArrowRight className="ml-2" /></div>
                       </div>
                     </Button>
        
      </div>

      {/* Additional Content (Product Tags and Carousel) */}
   
        </div></>
  );
}
