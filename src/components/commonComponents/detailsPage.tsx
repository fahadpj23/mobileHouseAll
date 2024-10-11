import AddButton from "./addButton";
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
      <div className="w-full flex justify-end space-x-2 items-center">
        <div className="p-2 flex bg-whiteBackground rounded-lg my-2 w-56 justify-end  ">
          <SearchBar />
        </div>
        <AddButton />
      </div>
      <ListTable tableHead={PurchaseTableHead} tableData={tableData} />
    </div>
  );
};
export default DetailsPage;
