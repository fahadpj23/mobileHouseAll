import React, { FC } from "react";

import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import SideBarItems from "constants/sideBarItems";
import sideBarModel from "model/sideBarModel";
import MobileHouseLogo from "assets/mobileHouseLogo.png";

interface props {
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SideBar: FC<props> = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <div className="flex flex-col justify-between p-2 ml-2 ">
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <div className="rounded-full h-6 w-6 overflow-hidden flex items-center justify-center shadow-lg border-gray-200">
            <img src={MobileHouseLogo} alt="mobile House Logo" />
          </div>
          {sideBarOpen && (
            <div className=" font-bold -tracking-wider text-sm -space-y-1">
              <h1>MOBILE </h1>
              <h1>HOUSE</h1>
            </div>
          )}
        </div>
        <button aria-label="menu" onClick={() => setSideBarOpen(!sideBarOpen)}>
          <MenuIcon />
        </button>
      </div>
      <div className="flex flex-col justify-center mt-10 space-y-2">
        {SideBarItems.map((sidebar: sideBarModel) => {
          return (
            <div
              key={sidebar?.id}
              className=" w-full text-textBlackColor  hover:text-textBlackColor hover:font-bold p-2 "
            >
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
