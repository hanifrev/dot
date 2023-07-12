import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavigationModal from "./NavigationModal";
import { navigation } from "../data/navigation";
import NavDropdown from "./NavDropdown";
import Layout from "./Layout";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black">
      <Layout>
        <div className=" mx-auto flex items-center justify-between py-4  flex-row  h-[60px] lg:h-[122px]">
          <div className="flex w-full md:w-[147px] justify-between">
            <h1 className="text-xl font-bold w-[100px] md:w-[147px]">
              <img src="/assets/Logo.svg" />
            </h1>
            <button className="ml-2 block md:hidden" onClick={handleMenuToggle}>
              <RxHamburgerMenu />
            </button>
          </div>

          <div className="hidden md:flex flex-row gap-8 w-full justify-center">
            {navigation.map((item) => (
              <NavDropdown title={item.title} link={item.link} />
            ))}
          </div>

          <div className="hidden md:flex flex-row gap-4">
            <div className="w-[75px] h-7 md:h-10 px-4 py-2.5 rounded-md border justify-center items-center gap-2 inline-flex">
              <button className="text-black text-base font-semibold">
                Daftar
              </button>
            </div>
            <div className="w-[77px] h-7 md:h-10 px-4 py-2.5 bg-red-500 rounded-md justify-center items-center gap-2 inline-flex">
              <button className="text-white text-base font-semibold">
                Masuk
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white h-7 md:h-[40px] lg:h-[72px] flex items-center py-4 mx-auto">
          <div className="w-[395px] h-6 justify-start items-center gap-2 inline-flex">
            <div className="text-red-500 text-xs md:text-sm font-semibold leading-[21px]">
              Home
            </div>
            <img src="/assets/Chevron.svg" className="w-6 h-6 relative" />
            <div className="text-red-500 text-xs md:text-sm font-semibold leading-[21px]">
              Layanan Desain
            </div>
            <img src="/assets/Chevron.svg" className="w-6 h-6 relative" />
            <div className="text-neutral-400 text-xs md:text-sm font-semibold leading-[21px]">
              Omah Apik 3
            </div>
          </div>
        </div>
        {isMenuOpen && <NavigationModal />}
      </Layout>
    </header>
  );
};

export default Header;
