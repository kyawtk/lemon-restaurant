import React from "react";
import logo from '../assets/icons_assets/Logo.svg'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="py-4 px-14 text-normal">
      <nav className="bg-white innerWidth flex items-center justify-between">
        <div className="">
            <img src={logo} alt="LIttle lemon logo"  className="w-full h-full object-contain"/>
        </div>
        <ul className="flex flex-[0.5] items-center justify-evenly">
          <li>
            <Link to={"/"}>Home </Link>
          </li>
          <li>
            <Link to={"/About"}>About </Link>
          </li>
          <li>
            <Link to={"/reservations"}>Reservations </Link>
          </li>
          <li>
            <Link to={"/menu"}>Menu </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
