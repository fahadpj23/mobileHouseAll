import EqualizerIcon from "@mui/icons-material/Equalizer";

import MiniDetailCard from "components/commonComponents/miniDetailCard";
import SubHeadingWithLogo from "components/commonComponents/subHeadingWithLogo";

const DashBoard = () => {
  return (
    <div>
      <SubHeadingWithLogo icon={"EqualizerIcon"} title="Business OverView" />
      <div className="flex justify-evenly">
        <MiniDetailCard />
        <MiniDetailCard />
        <MiniDetailCard />
      </div>
    </div>
  );
};
export default DashBoard;
