import React, { ReactNode } from "react";
import Header from "./Header";
import Slider from "./Slider";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-[1440px] px-6 lg:px-[62px] mx-auto">{children}</div>
  );
};

export default Layout;
