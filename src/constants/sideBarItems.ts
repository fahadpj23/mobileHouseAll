import * as MuiIcons from "@mui/icons-material";

import sideBarModel from "model/sideBarModel";

const sideBarItems: sideBarModel[] = [
  {
    id: 1,
    name: "dashBoard",
    route: "/dashBoard",
    icon: MuiIcons.Home,
  },
  {
    id: 2,
    name: "purchase",
    route: "/purchase",
    icon: MuiIcons.ShoppingCart,
  },
  {
    id: 3,
    name: "sales",
    route: "/sales",
    icon: MuiIcons.CurrencyExchange,
  },
  {
    id: 4,
    name: "inventory",
    route: "/inventory",
    icon: MuiIcons.Inventory,
  },
];

export default sideBarItems;
