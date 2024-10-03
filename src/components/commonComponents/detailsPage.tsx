import SearchBar from "./searchBar";
import ListTable from "./table";
import PurchaseTableHead from "constants/purchaseTableHead";
const DetailsPage = () => {
  const tableData = [
    {
      invoiceNo: 12,
      invoiceDate: "12-05-2024",
      seller: "ABC",
      amount: 10000,
    },
    {
      invoiceNo: 13,
      invoiceDate: "12-05-2024",
      seller: "ABC",
      amount: 10000,
    },
    {
      invoiceNo: 14,
      invoiceDate: "12-05-2024",
      seller: "ABC",
      amount: 10000,
    },
  ];
  return (
    <div>
      <SearchBar />
      <ListTable tableHead={PurchaseTableHead} tableData={tableData} />
    </div>
  );
};
export default DetailsPage;
