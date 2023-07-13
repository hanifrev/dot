/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <div className="bg-sky-950 font">
      <Layout>
        <div className="text-white bg-sky-950 py-[39px]">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* section 1 left */}
            <div className="md:w-[400px] lg:w-[608px] flex flex-col gap-4">
              <img
                className="w-[120px]  md:w-[169px] relative invert"
                src="/assets/Logo.svg"
                alt="img"
              />
              <div className="lg:w-[608px] text-sm lg:text-base font-normal leading-normal">
                SobatBangun adalah platform digital dari SIG yang bergerak
                dengan misi mengembangkan proses pembangunan dan renovasi rumah
                secara lebih baik serta berkelanjutan.
              </div>
              <div className="flex flex-row p-2 gap-3">
                <img src="/assets/Message.svg" alt="img" />
                <a
                  href="mailto:sobat@sobatbangum.com"
                  className="w-[528px] text-base font-normal underline leading-snug"
                >
                  sobat@sobatbangum.com
                </a>
              </div>
              <div className=" text-white text-base font-normal leading-snug ">
                Sosial Media :
              </div>
              <div className="flex flex-row gap-[26px] justify-center md:justify-normal">
                <a href="#">
                  <img src="/assets/oval-ig.svg" alt="img" />
                </a>
                <a href="#">
                  <img src="/assets/oval-fb.svg" alt="img" />
                </a>
                <a href="#">
                  <img src="/assets/oval-yt.svg" alt="img" />
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

          <div className="flex flex-col lg:flex-row pt-[46px]">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1  flex">
              <div className=" lg:h-[21px] text-white text-base font-semibold leading-tight">
                Kredit Bangun Rumah
              </div>
              <div className="justify-start items-center gap-6  flex">
                <img
                  className="w-14 h-14"
                  src="/assets/mandiri.png"
                  alt="img"
                />
                <img className="w-14 h-14" src="/assets/btn.png" alt="img" />
                <img className="w-14 h-14" src="/assets/bni.png" alt="img" />
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1  flex">
              <div className="lg:h-[21px] text-white text-base font-semibold leading-tight">
                Tunai Via Bank Transfer
              </div>
              <div className="justify-start items-start gap-6  flex">
                <img
                  className="w-14 h-14"
                  src="/assets/mandiri.png"
                  alt="img"
                />
                <img className="w-14 h-14" src="/assets/bri.png" alt="img" />
                <img className="w-14 h-14" src="/assets/bni.png" alt="img" />
                <img
                  className="w-14 h-14"
                  src="/assets/permata.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-1  flex">
              <div className="w-[175px] lg:h-[21px] text-white text-base font-semibold leading-tight">
                Kartu Kredit
              </div>
              <div className="justify-start items-start gap-6  flex">
                <img
                  className="w-14 h-[55.14px]"
                  src="/assets/visa.png"
                  alt="img"
                />
                <img
                  className="w-14 h-[55.14px]"
                  src="/assets/master.png"
                  alt="img"
                />
                <img
                  className="w-14 h-[55.14px]"
                  src="/assets/jcb.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2  flex">
              <div className="text-white text-base font-semibold leading-tight">
                Rekan Teknologi Tambahan
              </div>
              <div className="justify-start items-center gap-6  flex">
                <img
                  className="w-14 h-[55.14px]"
                  src="/assets/rekan1.png"
                  alt="img"
                />
                <img className="w-14 " src="/assets/rekan2.png" />
                <img
                  className="w-14 h-[55.14px]"
                  src="/assets/rekan3.png"
                  alt="img"
                />
                <img
                  className="w-14 h-[55.14px]"
                  src="/assets/rekan4.png"
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="pt-[46px] justify-between items-center gap-5 flex flex-col md:flex-row">
            <div className="justify-start items-end gap-4 flex">
              <div className="text-white text-base font-normal leading-9 ">
                Powered by :
              </div>
              <img
                src="/assets/sig.svg"
                className="w-[71px] h-[41px] relative"
                alt="img"
              />
            </div>
            <div className="text-white text-sm font-normal leading-[16.80px]">
              Copyright © 2023 SobatBangun. All rights reserved.
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
