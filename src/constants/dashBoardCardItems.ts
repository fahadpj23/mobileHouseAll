import salesIcon from "assets/svg/salesIcon.svg";
import purchaseIcon from "assets/svg/purchaseIcon.svg";
import InventoryIcon from "assets/svg/inventoryIcon.svg";
import dashBoardCardItemsModel from "model/dashBoardCardItemsModel";

const dashBoardCardItems: dashBoardCardItemsModel[] = [
  {
    id: 0,
    icon: salesIcon,
    title: "Earned This month",
    backgroundColor: "cardBlueBackground",
  },
  {
    id: 1,
    icon: purchaseIcon,
    title: "Purchased This month",
    backgroundColor: "cardYellowBackground",
  },
  {
    id: 2,
    icon: InventoryIcon,
    title: "Inventory Stock",
    backgroundColor: "cardRedBackground",
  },
];
export default dashBoardCardItems;
