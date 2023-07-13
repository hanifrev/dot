import React from "react";
import Layout from "../components/Layout";
import { homeview } from "../data/homeview";
import HomeCard from "../components/HomeCard";
import DetailCard from "../components/DetailCard";
import Testimonial from "../components/Testimonial";

const HomeList = () => {
  return (
    <div className="bg-white">
      <Layout>
        <div className="text-zinc-900 text-lg pt-6 pb-4 text-center lg:text-left lg:text-2xl font-semibold leading-[28.80px]">
          Tampilan Rumah
        </div>
        <div className="lg:flex">
          <div className="flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:justify-center lg:justify-start lg:content-start">
            {homeview.map((item, index) => (
              <HomeCard
                key={index}
                imgSource={item.imgSource}
                name={item.name}
                size={item.size}
              />
            ))}
          </div>
          <div>
            <DetailCard />
            <Testimonial />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HomeList;
