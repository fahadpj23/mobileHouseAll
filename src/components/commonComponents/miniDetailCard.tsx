import sales from "assets/svg/sales.svg";
const MiniDetailCard = () => {
  return (
    <div className="bg-whiteBackground shadow-lg p-2  rounded-xl">
      <div className="  flex p-2 space-x-3 ">
        <div className="  flex flex-col  justify-center items-center bg-cardBlueBackground rounded-xl w-16 ">
          <img src={sales} width={20} height={10} alt="logo" />
        </div>
        <div>
          <h1 className="font-bold text-xl">$5420</h1>
          <h1 className="text-gray-400">Earned This Month</h1>
        </div>
      </div>
    </div>
  );
};
export default MiniDetailCard;
