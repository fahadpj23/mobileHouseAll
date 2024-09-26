import React, { FC } from "react";
import Icon from "@mui/material/Icon";

interface props {
  icon: any;
  title: string;
}
const SubHeadingWithLogo: FC<props> = ({ icon, title }) => {
  return (
    <div className="flex h-20">
      <h1>{icon}</h1>
      <h1>{title}</h1>
    </div>
  );
};
export default SubHeadingWithLogo;
