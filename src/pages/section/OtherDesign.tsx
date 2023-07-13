import React from "react";
import OtherDesignCard from "../components/OtherDesignCard";
import Layout from "../components/Layout";
import { OtherDesignData } from "@/data/otherdesign";

const OtherDesign = () => {
  return (
    <Layout>
      <div className="text-black text-center lg:text-left font-semibold text-lg lg:text-2xl pb-6">
        Desain Lainnya oleh Studio SAe
      </div>
      <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-4 lg:pt-[45px]">
        {OtherDesignData.map((item, index) => (
          <OtherDesignCard
            key={item.title}
            title={item.title}
            imgSrc={item.src}
            price={item.price}
          />
        ))}
      </div>
    </Layout>
  );
};

export default OtherDesign;
