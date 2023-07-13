import React from "react";

interface CardProps {
  title: string;
  imgSrc: string;
  price: string;
}

const OtherDesignCard: React.FC<CardProps> = ({ title, imgSrc, price }) => {
  return (
    <div className="w-[290px] lg:w-[316px] h-[564px] mx-auto p-4 rounded-2xl border text-black border-neutral-200 flex flex-col lg:mt-9 lg:transform lg:-translate-y-[81px]">
      <img className="w-[284px] h-[201px] rounded" src={imgSrc} />
      <div className="flex flex-row gap-2 pt-6 pb-2">
        <div className="text-lg lg:text-2xl font-semibold ">{title}</div>
        <div className="w-[104px] h-7 px-3 py-1 bg-zinc-100 rounded-2xl border justify-start items-start gap-2.5 inline-flex">
          <div className="text-black text-sm font-normal leading-tight">
            Scandinavian
          </div>
        </div>
      </div>

      <div className="flex flex-row pb-4">
        <img src="/assets/std.png" />
        <span className="text-xs lg:text-sm  font-normal pt-1">Studio SAe</span>
      </div>

      <div className="w-[255px] lg:w-[294px]  h-[63px] justify-between lg:justify-start items-start gap-2 inline-flex  flex-wrap">
        <div className="flex-col justify-start items-center inline-flex">
          <img src="/assets/dimensi.svg" className="w-6 h-6 relative" />
          <div className="text-zinc-500 text-[10px] lg:text-xs font-normal leading-[18px]">
            Dimensi Tanah
          </div>
          <div className="text-black text-[10px] lg:text-xs font-normal leading-[21px]">
            15 x 8m
          </div>
        </div>
        <div className="flex-col justify-start items-center inline-flex">
          <img src="/assets/luas.svg" className="w-6 h-6 relative" />
          <div className="text-zinc-500 text-[10px] lg:text-xs font-normal leading-[18px]">
            Luas Bangunan
          </div>
          <div>
            <span className="text-black text-[10px] lg:text-xs font-normal leading-[21px]">
              112m
            </span>
            <span className="text-black text-[10px] lg:text-xs font-normal leading-[21px]">
              2
            </span>
          </div>
        </div>
        <div className="flex-col justify-start items-center inline-flex">
          <img src="/assets/lantai.svg" className="w-6 h-6 relative" />
          <div className="text-zinc-500 text-[10px] lg:text-xs font-normal leading-[18px]">
            Lantai
          </div>
          <div className="text-black text-xs lg:text-sm font-normal leading-[21px]">
            2
          </div>
        </div>
        <div className="flex-col justify-start items-center inline-flex">
          <img src="/assets/kamar.svg" className="w-6 h-6 relative" />
          <div className="text-zinc-500 text-[10px] lg:text-xs font-normal leading-[18px]">
            Kamar Tidur
          </div>
          <div className="text-black text-xs lg:text-sm font-normal leading-[21px]">
            4
          </div>
        </div>
      </div>
      <div className="w-[316px] h-[88px] flex-col justify-start items-start gap-1 inline-flex pt-8">
        <div className="text-black text-xs lg:text-sm font-normal leading-[21px]">
          Harga Desain
        </div>
        <div className="flex-col justify-end items-start gap-1 flex">
          <div className="text-black text-2xl font-semibold ">{price}</div>
          <div className="text-zinc-500 text-xs lg:text-sm font-normal leading-[21px]">
            Harga konstruksi mulai dari Rp 560.000.000
          </div>
        </div>
      </div>
      <button className="w-[255px] lg:w-[284px] h-[37px] px-4 py-2 mt-[58px] rounded-md border border-rose-500 hover:bg-red-200 justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-rose-500 text-sm font-semibold leading-[21px]">
          Lihat Detail
        </div>
      </button>
    </div>
  );
};

export default OtherDesignCard;
