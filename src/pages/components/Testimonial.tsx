/* eslint-disable @next/next/no-img-element */
import React from "react";

const Testimonial = () => {
  const data = [
    {
      name: "Budi Setiadi",
      rating: "4.5",
      desc: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
    },
    {
      name: "Budi Setiadi",
      rating: "4.5",
      desc: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
    },
    {
      name: "Budi Setiadi",
      rating: "4.5",
      desc: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun",
    },
  ];

  return (
    <div className="pt-8 pb-12 flex flex-col items-center lg:-mt-[82px]">
      <div className="text-black font-semibold text-lg lg:text-2xl pb-4">
        Testimoni
      </div>
      <div className="flex flex-col gap-4 w-[328px] lg:w-[364px]">
        {data.map((item, index) => (
          <div
            className="w-[328px] lg:w-[364px] justify-start items-start gap-4 flex"
            key={index}
          >
            <img
              src="/assets/profilepic.svg"
              className="w-11 h-11 relative"
              alt="img"
            />
            <div className="w-[304px] self-stretch flex-col justify-start items-start gap-1 flex">
              <div className="justify-start items-center gap-2 flex">
                <div className="text-zinc-900 text-sm lg:text-base font-semibold leading-tight">
                  {item.name}
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="justify-center items-center flex">
                    <img
                      src="/assets/stars.svg"
                      className="w-5 h-5 relative"
                      alt="img"
                    />
                  </div>
                  <div className="text-slate-600 text-sm font-normal leading-7">
                    {item.rating}
                  </div>
                </div>
              </div>
              <div className="self-stretch text-stone-500 text-sm lg:text-base font-normal leading-snug">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
