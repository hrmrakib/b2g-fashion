import CollectionBanner from "@/components/home/CollectionBanner";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import Hero from "@/components/home/Hero";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
      <PromotionalBanner />
      <CollectionBanner />
    </div>
  );
};

export default page;
