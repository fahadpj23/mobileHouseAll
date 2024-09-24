import React, { FC, useState } from "react";

import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import SideBarItems from "constants/sideBarItems";
import sideBarModel from "model/sideBarModel";

interface props {
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideBar: FC<props> = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <div className="flex flex-col justify-between ">
      <div className="flex justify-between">
        <h1>Mobile House</h1>
        <button aria-label="menu" onClick={() => setSideBarOpen(!sideBarOpen)}>
          <MenuIcon />
        </button>
      </div>
      <div className="flex flex-col justify-center h-3/6">
        {SideBarItems.map((sidebar: sideBarModel) => {
          return (
            <div className=" w-full text-textBlackColor  hover:text-textBlackColor hover:font-bold p-2 ">
              <Link
                className={`flex items-center  ${
                  sideBarOpen
                    ? "justify-start space-x-2"
                    : "justify-end space-x-0"
                } `}
                to={sidebar.route}
              >
                <sidebar.icon />
                <h1 className="uppercase text-xs tracking-widest font-semibold">
                  {sideBarOpen && sidebar.name}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SideBar;
