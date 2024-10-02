import { FC } from "react";

import * as MuiIcons from "@mui/icons-material";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { Link } from "@mui/material";

import DynamicMuiIcon from "utils/dynamicMuiIcon";

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
        <h1 className="font-semibold">{title}</h1>
      </div>
      {linkSrc && (
        <Link
          href={linkSrc}
          underline="none"
          sx={{ fontSize: 14, fontWeight: 500 }}
        >
          View All
          <ArrowRightAltOutlinedIcon />
        </Link>
      )}
    </div>
  );
};
export default SubHeadingWithIcon;
