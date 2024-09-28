import MiniDetailCard from "components/commonComponents/miniDetailCard";
import SubHeadingWithIcon from "components/commonComponents/subHeadingWithIcon";

const DashBoard = () => {
  return (
    <div>
      <SubHeadingWithIcon
        icon={"EqualizerOutlined"}
        title="Business OverView"
      />
      <div className="flex justify-evenly">
        <MiniDetailCard />
      </div>
    </div>
  );
};
export default DashBoard;
