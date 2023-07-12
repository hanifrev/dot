import React from "react";

interface NavProps {
  title: string;
  link: string;
}

const NavDropdown: React.FC<NavProps> = ({ title, link }) => {
  return (
    <div className="text-sm lg:text-base">
      <a className="hover:text-red-500" href={link}>
        {title}
      </a>
    </div>
  );
};

export default NavDropdown;
