import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "pages/dashBoard";
import Purchase from "pages/purchase";
import Sales from "pages/sales";
import MainLayout from "Layout/mainLayout";
import Customers from "pages/customers";
import Supplier from "pages/supplier";
import Inventory from "pages/inventory";
const PageRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route index path="/dashBoard" element={<DashBoard />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="sales" element={<Sales />} />
          <Route path="supplier" element={<Supplier />} />
          <Route path="customers" element={<Customers />} />
          <Route path="inventory" element={<Inventory />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
export default PageRoutes;
