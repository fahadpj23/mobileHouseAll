import { useSelector } from "react-redux";
import { fetchSupplier, addSupplier } from "slice/supplierSlice";
import { useContext, useEffect } from "react";

import { useAppDispatch, RootState } from "store";

import DetailsPage from "components/commonComponents/detailsPage";
import SuppilerTableHead from "constants/supplierConstants/supplierTableHead";
import SupplierAddForm from "constants/supplierConstants/suppilerAddForm";
import toastMessage from "utils/toastMessage";
import { BillingContext } from "context/billingContext";

import CONSTANTVALUES from "constants/constantValues";

const Supplier = () => {
  const appDispatch = useAppDispatch();
  const billingContext = useContext(BillingContext);
  const { loading, entityList, successMessage, error } = useSelector(
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
      toastMessage("success", successMessage);
      appDispatch(fetchSupplier());
    }
  }, [successMessage, error]);

  useEffect(() => {
    if (error?.response) {
      toastMessage("warning", error?.response?.data?.message);
    }
  }, [error]);

  return (
    <div>
      <DetailsPage
        addNewDetails={supplierAdd}
        pageName={CONSTANTVALUES.SUPPLIER}
      />
    </div>
  );
};
export default Supplier;
