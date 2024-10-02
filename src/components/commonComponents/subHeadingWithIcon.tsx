import { FC } from "react";

import * as MuiIcons from "@mui/icons-material";

import DynamicMuiIcon from "utils/dynamicMuiIcon";
import { Link } from "react-router-dom";

type MuiIconKeys = keyof typeof MuiIcons;

interface props {
  icon: MuiIconKeys;
  title: string;
  linkSrc?: string;
}

const SubHeadingWithIcon: FC<props> = ({ icon, title, linkSrc }) => {
  console.log(typeof icon);
  return (
    <div className="flex w-full justify-between mb-5">
      <div className="flex space-x-2">
        <DynamicMuiIcon iconName={icon} />
        <h1>{title}</h1>
      </div>
      {linkSrc && <Link to={linkSrc}>View All</Link>}
    </div>
  );
};
export default SubHeadingWithIcon;
