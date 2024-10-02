import { useState } from "react";

import SideBar from "./sideBar";

const MainLayout = ({ children }: any) => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  return (
    <div className="flex h-screen w-screen ">
      <div
        className={`${
          sideBarOpen ? "w-56" : "w-20"
        } transition-width duration-300 overflow-hidden shadow-xl bg-whiteBackground`}
      >
        <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      </div>
      <div
        className={`${
          sideBarOpen ? "w-[calc(100%-10rem)]" : "w-full"
        } transition-width duration-3000 bg-grayBackground m-4 p-5 rounded-xl shadow-2xl  `}
      >
        <main>{children}</main>
      </div>
    </div>
  );
};
export default MainLayout;
