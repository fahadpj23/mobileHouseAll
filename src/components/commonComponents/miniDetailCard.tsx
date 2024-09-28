import dashBoardCardItemsModel from "model/dashBoardCardItemsModel";
import dashBoardCardItems from "constants/dashBoardCardItems";
const MiniDetailCard = () => {
  return (
    <div className="flex justify-evenly w-full">
      {dashBoardCardItems &&
        dashBoardCardItems.map((cardItems: dashBoardCardItemsModel) => (
          <div className="bg-whiteBackground shadow-lg p-2  rounded-xl">
            <div className="  flex p-2 space-x-3 ">
              <div
                className={` flex flex-col  justify-center items-center bg-${[
                  cardItems.backgroundColor,
                ]} rounded-xl w-16 `}
              >
                <img src={cardItems.icon} width={20} height={10} alt="logo" />
              </div>
              <div>
                <h1 className="font-bold text-xl">{0}</h1>
                <h1 className="text-gray-400">{cardItems.title}</h1>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default MiniDetailCard;
