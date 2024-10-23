import { FC } from "react";
import AddButton from "./addButton";
import SearchBar from "./searchBar";
import ListTable from "./table";
import PurchaseTableHead from "constants/purchaseTableHead";
import { useContext, useEffect } from "react";

import { useAppDispatch, RootState } from "store";
import { useSelector } from "react-redux";
import { getTableHead } from "utils/getTableHead";
import { getEntities } from "slice/crudSlice";

interface props {
  addNewDetails?: any;
  pageName: string;
}

const DetailsPage: FC<props> = ({ addNewDetails, pageName }) => {
  // const state = useSelector(
  //   (state: RootState) => state[reducerName as keyof RootState]
  // );
  const appDispatch = useAppDispatch();
  const { entityList } = useSelector((state: RootState) => state.crud);

  useEffect(() => {
    appDispatch(getEntities({ pageName }));
  }, []);

  return (
    <div>
      <div className="w-full flex justify-end space-x-2 items-center">
        <div className="p-2 flex bg-whiteBackground rounded-lg my-2 w-56 justify-end  ">
          <SearchBar />
        </div>
        <AddButton pageName={pageName} />
      </div>
      <ListTable
        tableHead={getTableHead(pageName)}
        tableData={entityList}
        pageName={pageName}
      />
    </div>
  );
};
export default DetailsPage;
