import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Purchase from "pages/Purchase";
import Sales from "pages/Sales";
import MainLayout from "Layout/mainLayout";
const PageRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="sales" element={<Sales />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
export default PageRoutes;
