import React from "react";

const DetailCard = () => {
  return (
    <div className="w-[333px] lg:w-[364px] h-[438px] mx-auto p-6 rounded-2xl border text-black border-neutral-200 flex flex-col mt-9 lg:transform lg:-translate-y-[81px]">
      <div className="text-lg lg:text-2xl font-semibold pb-2">Omah Apik 3</div>
      <div className="flex flex-row pb-4">
        <img src="/assets/std.png" />
        <span className="text-xs lg:text-sm  font-normal pt-1">Studio SAe</span>
      </div>
      <div className="w-[316px] h-[50px] flex-col justify-start items-start gap-2 inline-flex">
        <div className="justify-start items-start gap-6 inline-flex">
          <div className="w-24 text-neutral-600 text-xs lg:text-sm font-normal leading-[21px]">
            Jenis Rumah
          </div>
          <div className="text-black text-xs lg:text-sm  font-normal leading-[21px]">
            Scandinavian
          </div>
        </div>
        <div className="justify-start items-start gap-6 inline-flex">
          <div className="w-24 text-neutral-600 text-xs lg:text-sm  font-normal leading-[21px]">
            Tipe Desain
          </div>
          <div className="self-stretch justify-start items-center gap-2 flex">
            <div className="w-4 h-4 bg-red-500 rounded-[100px] justify-center items-center gap-2.5 flex">
              <img src="/assets/Check.svg" className="w-3 h-3 relative" />
            </div>
            <div className="text-red-500 text-xs lg:text-sm  font-normal leading-[21px]">
              Dapat Dimodifikasi
            </div>
          </div>
        </div>
      </div>
      <div className="w-[277px] lg:w-[316px] h-[63px] justify-between items-center gap-2 inline-flex pt-8 flex-wrap">
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
            <span className="text-black text-[10px] lg:text-xs text-sm font-normal leading-[21px]">
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
      <div className="w-[316px] h-[88px] flex-col justify-start items-start gap-1 inline-flex pt-[47px]">
        <div className="text-black text-xs lg:text-sm font-normal leading-[21px]">
          Harga Desain
        </div>
        <div className="flex-col justify-end items-start gap-1 flex">
          <div className="text-black text-2xl lg:text-[32px] font-semibold leading-[38.40px]">
            Rp. 32.500.000
          </div>
          <div className="text-zinc-500 text-xs lg:text-sm font-normal leading-[21px]">
            Harga konstruksi mulai dari Rp 560.000.000
          </div>
        </div>
      </div>
      <button className="w-[277px] lg:w-[316px] mt-[59px] h-12 px-4 py-3.5 bg-red-500 hover:bg-red-300 rounded-md justify-center items-center gap-2 inline-flex">
        <div className="text-white text-base font-semibold">
          Konsultasi Sekarang
        </div>
      </button>
    </div>
  );
};

export default DetailCard;
