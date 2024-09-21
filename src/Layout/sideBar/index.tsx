import { useState } from "react";

import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

import SideBarItems from "constants/sideBarItems";
import sideBarModel from "model/sideBarModel";

const SideBar = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div
      className={`  bg-grayBackground relative ease-in-out delay-400 transition w-auto  `}
    >
      <div>
        {open && <h1>Mobile House</h1>}
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
              <Link className="flex " to={sidebar.route}>
                <sidebar.icon />
                <h1 className="ml-2">{open && sidebar.name}</h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SideBar;
