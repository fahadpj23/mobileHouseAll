import * as MuiIcons from "@mui/icons-material";

import sideBarModel from "model/sideBarModel";

const sideBarItems: sideBarModel[] = [
  {
    id: 1,
    name: "dashBoard",
    route: "/dashBoard",
    icon: MuiIcons.RocketLaunchOutlined,
  },
  {
    id: 2,
    name: "purchase",
    route: "/purchase",
    icon: MuiIcons.ShoppingCartOutlined,
  },
  {
    id: 3,
    name: "sales",
    route: "/sales",
    icon: MuiIcons.ArticleOutlined,
  },
  {
    id: 4,
    name: "inventory",
    route: "/inventory",
    icon: MuiIcons.StorefrontOutlined,
  },
];

export default sideBarItems;
