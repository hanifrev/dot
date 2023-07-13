import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <div className="bg-sky-950">
      <Layout>
        <div className="text-white bg-sky-950 py-[39px]">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* section 1 left */}
            <div className="lg:w-[608px] flex flex-col gap-4">
              <img
                className="w-[120px]  md:w-[169px] relative invert"
                src="/assets/Logo.svg"
              />
              <div className="lg:w-[608px] text-sm lg:text-base font-normal leading-normal">
                SobatBangun adalah platform digital dari SIG yang bergerak
                dengan misi mengembangkan proses pembangunan dan renovasi rumah
                secara lebih baik serta berkelanjutan.
              </div>
              <div className="flex flex-row p-2">
                <img src="/assets/Message.svg" />
                <div className="w-[528px] text-base font-normal underline leading-snug">
                  sobat@sobatbangum.com
                </div>
              </div>
              <div className=" text-white text-base font-normal leading-snug">
                Sosial Media :
              </div>
              <div className="flex flex-row gap-[26px]">
                <a href="#">
                  <img src="/assets/oval-ig.svg" />
                </a>
                <a href="#">
                  <img src="/assets/oval-fb.svg" />
                </a>
                <a href="#">
                  <img src="/assets/oval-yt.svg" />
                </a>
              </div>
            </div>
            {/* section 1 right */}
            <div className="lg:w-[555px]justify-start items-start gap-3 lg:gap-12 flex">
              <div className="lg:w-[253.50px] grow shrink basis-0 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch  text-white text-lg lg:text-xl font-bold leading-[30px]">
                  Produk & Layanan
                </div>
                <div className="flex-col justify-start items-start gap-2 flex text-white text-sm lg:text-base font-normal leading-9">
                  <a href="#" className=" ">
                    Renovasi
                  </a>
                  <a href="#" className="">
                    Bangun Rumah
                  </a>
                  <a href="#" className="">
                    Layanan Desain
                  </a>
                  <a href="#" className="">
                    Teknologi Tambahan
                  </a>
                  <a href="#" className="">
                    Beli Material
                  </a>
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch  text-white text-lg lg:text-xl font-bold leading-[30px]">
                  Tentang Kami
                </div>
                <div className="flex-col justify-start items-start gap-2 flex text-white text-sm lg:text-base font-normal leading-9">
                  <a href="#" className=" t">
                    Tentang SobatBangun
                  </a>
                  <a href="#" className=" ">
                    Kebijakan Dan Privasi
                  </a>
                  <a href="#" className=" ">
                    Syarat Dan Ketentuan
                  </a>
                  <a href="#" className=" ">
                    FAQ
                  </a>
                  <a href="#" className=" ">
                    Daftar Menjadi Mitra
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
