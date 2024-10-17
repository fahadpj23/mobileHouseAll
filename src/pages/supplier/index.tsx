import { useSelector } from "react-redux";
import { fetchSupplier, addSupplier } from "slice/supplierSlice";
import { useEffect } from "react";

import { useAppDispatch, RootState } from "store";

import DetailsPage from "components/commonComponents/detailsPage";
import SuppilerTableHead from "constants/supplierConstants/supplierTableHead";
import SupplierAddForm from "constants/supplierConstants/suppilerAddForm";

const Supplier = () => {
  const appDispatch = useAppDispatch();
  const { loading, entityList } = useSelector(
    (state: RootState) => state.supplier
  );

  useEffect(() => {
    appDispatch(fetchSupplier());
  }, [appDispatch]);

  const supplierAdd = (data: any) => {
    appDispatch(addSupplier(data));
  };

  return (
    <div>
      <DetailsPage
        formFieldDetails={SupplierAddForm}
        addNewDetails={supplierAdd}
        tableHead={SuppilerTableHead}
        tableData={entityList}
      />
    </div>
  );
};
export default Supplier;
