import Headers from "constants/headers";
import headerModel from "model/headerModel";
const Header = () => {
  return (
    <div className="flex justify-between px">
      {Headers.map((header: headerModel, key: number) => {
        return <div>{header.name}</div>;
      })}
    </div>
  );
};
export default Header;
