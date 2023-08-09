import { menu } from "../constants";
import MenuCard from "./MenuCard";
import { useEffect, useState } from "react";

import { MenuCardProps } from "../types";
const Specials = () => {
  
  return (
    <div className="innerWidth flex flex-col w-full mt-[100px] relative ">
      <h2 className="text-5xl font-bold text-center mb-20 ">Specials</h2>
      <div className=" mx-auto flex w-full flex-col flex-wrap md:flex-row justify-center items-center md:items-start    gap-7 ">
        {menu.map((item: MenuCardProps) => {
          return <MenuCard key={item.id} {...item}></MenuCard>;
        })}
      </div>
      <div className="gradient-red -bottom-[300px] -right-[100px]"></div>
    </div>
  );
};

export default Specials;
