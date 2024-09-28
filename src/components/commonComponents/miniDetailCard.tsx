import dashBoardCardItemsModel from "model/dashBoardCardItemsModel";
import dashBoardCardItems from "constants/dashBoardCardItems";

const BACKGROUNDCOLORS = ["#ebf0ff", "#FFF8E7", "#feedf3"];

const MiniDetailCard = () => {
  return (
    <div className="flex space-x-16 w-full">
      {dashBoardCardItems &&
        dashBoardCardItems.map((cardItems: dashBoardCardItemsModel) => (
          <div
            key={cardItems.id}
            className="bg-whiteBackground shadow-lg p-2 w-2/12 rounded-xl h-24 flex items-center justify-center"
          >
            <div className="  flex p-1 space-x-3 ">
              <div
                style={{ backgroundColor: BACKGROUNDCOLORS[cardItems.id] }}
                className={` flex flex-col  justify-center items-center  rounded-xl w-12 `}
              >
                <img src={cardItems.icon} width={20} height={10} alt="logo" />
              </div>
              <div>
                <h1 className="font-semibold text-lg">{0}</h1>
                <h1 className="text-gray-400 text-sm">{cardItems.title}</h1>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default MiniDetailCard;
