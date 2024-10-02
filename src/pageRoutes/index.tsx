import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "pages/dashBoard";
import Purchase from "pages/purchase";
import Sales from "pages/sales";
import MainLayout from "Layout/mainLayout";
import Customers from "pages/customers";
import Seller from "pages/seller";
const PageRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route index path="/dashBoard" element={<DashBoard />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="sales" element={<Sales />} />
          <Route path="customers" element={<Customers />} />
          <Route path="seller" element={<Seller />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
export default PageRoutes;
