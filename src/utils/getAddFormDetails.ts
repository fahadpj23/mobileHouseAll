import CONSTANTVALUES from "constants/constantValues";
import SupplierAddForm from "constants/supplierConstants/suppilerAddForm";

export const getAddFormDetails = (pageName: string) => {
  if (pageName == CONSTANTVALUES.SUPPLIER) {
    return SupplierAddForm;
  }
};
