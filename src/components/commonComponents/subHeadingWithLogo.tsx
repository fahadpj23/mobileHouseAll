import React, { FC } from "react";

import DynamicMuiIcon from "utils/dynamicMuiIcon";

interface props {
  icon: any;
  title: string;
}
const SubHeadingWithLogo: FC<props> = ({ icon, title }) => {
  return (
    <div className="flex h-20">
      <DynamicMuiIcon iconName={icon} />
      <h1>{title}</h1>
    </div>
  );
};
export default SubHeadingWithLogo;
