import BigDealSection from "@/components/home/BigDealSection";
import CollectionBanner from "@/components/home/CollectionBanner";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import Hero from "@/components/home/Hero";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import React from "react";

const HomePage = () => {
  return (
    <div className='bg-[#EEECFB]'>
      <Hero />
      <FeaturedProduct />
      <PromotionalBanner />
      <CollectionBanner />
      <BigDealSection />
    </div>
  );
};

export default HomePage;
