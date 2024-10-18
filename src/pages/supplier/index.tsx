import { useSelector } from "react-redux";
import { fetchSupplier, addSupplier } from "slice/supplierSlice";
import { useContext, useEffect } from "react";

import { useAppDispatch, RootState } from "store";

import DetailsPage from "components/commonComponents/detailsPage";
import SuppilerTableHead from "constants/supplierConstants/supplierTableHead";
import SupplierAddForm from "constants/supplierConstants/suppilerAddForm";
import toastMessage from "utils/toastMessage";
import { BillingContext } from "context/billingContext";

const Supplier = () => {
  const appDispatch = useAppDispatch();
  const billingContext = useContext(BillingContext);
  const { loading, entityList, successMessage } = useSelector(
    (state: RootState) => state.supplier
  );

  const supplierAdd = (data: any) => {
    appDispatch(addSupplier(data));
  };

  useEffect(() => {
    appDispatch(fetchSupplier());
  }, [appDispatch]);

  useEffect(() => {
    if (successMessage) {
      billingContext?.handleFormModal();
      toastMessage(successMessage);
      appDispatch(fetchSupplier());
    }
  }, [successMessage]);

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
