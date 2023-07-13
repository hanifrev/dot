/* eslint-disable @next/next/no-img-element */
import React from "react";

interface HomeProps {
  imgSource: string;
  name: string;
  size: string;
}

const HomeCard: React.FC<HomeProps> = ({ imgSource, name, size }) => {
  return (
    <div className="text-black w-[294px] p-4 border border-[#E6E6E6] rounded-lg">
      <img className="pb-6 rounded" src={imgSource} alt="img" />
      <div className="font-xl font-bold pb-4">{name}</div>
      <div className="text-sm">{size}</div>
    </div>
  );
};

export default HomeCard;
