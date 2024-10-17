import { FC } from "react";
import AddButton from "./addButton";
import SearchBar from "./searchBar";
import ListTable from "./table";
import PurchaseTableHead from "constants/purchaseTableHead";

interface props {
  formFieldDetails?: any;
  addNewDetails?: any;
  tableHead?: any;
  tableData?: any;
}
const DetailsPage: FC<props> = ({
  formFieldDetails,
  addNewDetails,
  tableHead,
  tableData,
}) => {
  return (
    <div>
      <div className="w-full flex justify-end space-x-2 items-center">
        <div className="p-2 flex bg-whiteBackground rounded-lg my-2 w-56 justify-end  ">
          <SearchBar />
        </div>
        <AddButton
          formFieldDetails={formFieldDetails}
          addNewDetails={addNewDetails}
        />
      </div>
      <ListTable tableHead={tableHead} tableData={tableData} />
    </div>
  );
};
export default DetailsPage;
