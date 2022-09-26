import React from 'react';       
import { Link } from "react-router-dom";
import classNames from "classnames";

export interface INavbarItemProps {
  name?: string;
  href?: string;
  children?: React.ReactNode;
}


export default function NavbarItem ({href, name, children}: INavbarItemProps) {
  // dynamic css values for navItems on interaction
  const regNavClass: string = classNames(
    "border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
  );
  
  const activeNavClass: string = classNames(
    "text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
  );
  return (
    <Link to={href ?? "/"}>
      <a href={href ?? "#"} className={regNavClass}>
        {name}
        {children}
      </a>
    </Link>
  );
}
