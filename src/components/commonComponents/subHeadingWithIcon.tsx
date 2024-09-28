import React, { FC } from "react";

import * as MuiIcons from "@mui/icons-material";

import DynamicMuiIcon from "utils/dynamicMuiIcon";

type MuiIconKeys = keyof typeof MuiIcons;

interface props {
  icon: MuiIconKeys;
  title: string;
}

const SubHeadingWithIcon: FC<props> = ({ icon, title }) => {
  return (
    <div className="flex h-20">
      <DynamicMuiIcon iconName={icon} />
      <h1>{title}</h1>
    </div>
  );
};
export default SubHeadingWithIcon;
