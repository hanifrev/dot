import React from "react";
import NavDropdown from "./NavDropdown";
import { navigation } from "../data/navigation";

const NavigationModal = () => {
  return (
    <div className="px-5 py-3 flex flex-col gap-3 md:hidden absolute -ml-6 z-50 bg-white w-full">
      {navigation.map((item, index) => (
        <NavDropdown title={item.title} link={item.link} key={index} />
      ))}
      <div className="flex flex-row justify-around pt-4 w-64 mx-auto">
        <div className="w-[75px] h-7 md:h-10 px-4 py-2.5 rounded-md border justify-center items-center gap-2 inline-flex">
          <button className="text-black text-base font-semibold">Daftar</button>
        </div>
        <div className="w-[77px] h-7 md:h-10 px-4 py-2.5 bg-red-500 rounded-md justify-center items-center gap-2 inline-flex">
          <button className="text-white text-base font-semibold">Masuk</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationModal;
