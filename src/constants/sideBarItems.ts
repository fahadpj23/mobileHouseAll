import * as MuiIcons from "@mui/icons-material";

import sideBarModel from "model/sideBarModel";
import ROUTES from "./routes";

const sideBarItems: sideBarModel[] = [
  {
    id: 1,
    name: "dashBoard",
    route: ROUTES.DASHBOARD,
    icon: MuiIcons.RocketLaunchOutlined,
  },
  {
    id: 2,
    name: "purchase",
    route: ROUTES.PURCHASEROUTE,
    icon: MuiIcons.ShoppingCartOutlined,
  },
  {
    id: 3,
    name: "sales",
    route: ROUTES.SALESROUTE,
    icon: MuiIcons.ArticleOutlined,
  },
  {
    id: 4,
    name: "inventory",
    route: ROUTES.INVENTORYROUTE,
    icon: MuiIcons.StorefrontOutlined,
  },
  {
    id: 5,
    name: "customers",
    route: ROUTES.CUSTOMERSROUTE,
    icon: MuiIcons.PeopleAltOutlined,
  },
  {
    id: 6,
    name: "supplier",
    route: ROUTES.SUPPLIERROUTE,
    icon: MuiIcons.StorefrontOutlined,
  },
];

export default sideBarItems;
