import { useState } from "react";

import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import SideBarItems from "constants/sideBarItems";
import sideBarModel from "model/sideBarModel";

const SideBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="absolute top-0 left-0 w-40 ">
      <div
        className={` ${
          open ? "translate-x-0" : "-translate-x-3/4"
        }  relative ease-in-out delay-600 transition bg-grayBackground h-screen   `}
      >
        <div className="flex justify-between ">
          <h1>Mobile House</h1>
          <button
            aria-label="menu"
            onClick={() => setOpen(!open)}
            className="absolute right-1 "
          >
            <MenuIcon className="absolute right-1" />
          </button>
        </div>
        <div className="flex flex-col justify-center h-3/6">
          {SideBarItems.map((sidebar: sideBarModel) => {
            return (
              <div className=" w-full text-textGrayColor  hover:text-textBlackColor hover:font-bold p-2 ">
                <Link
                  className={`flex items-center  ${
                    open ? "justify-start space-x-2" : "justify-end space-x-0"
                  } `}
                  to={sidebar.route}
                >
                  <sidebar.icon />
                  <h1 className="uppercase text-xs tracking-widest font-semibold">
                    {open && sidebar.name}
                  </h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SideBar;
