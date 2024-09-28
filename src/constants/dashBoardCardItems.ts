import salesIcon from "assets/svg/salesIcon.svg";
import purchaseIcon from "assets/svg/purchaseIcon.svg";
import dashBoardCardItemsModel from "model/dashBoardCardItemsModel";

const dashBoardCardItems: dashBoardCardItemsModel[] = [
  {
    icon: salesIcon,
    title: "Earned This month",
    backgroundColor: "cardBlueBackground",
  },
  {
    icon: purchaseIcon,
    title: "Purchased This month",
    backgroundColor: "cardBlueBackground",
  },
  {
    icon: purchaseIcon,
    title: "Inventory Stock",
    backgroundColor: "cardBlueBackground",
  },
];
export default dashBoardCardItems;
