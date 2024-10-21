import CONSTANTVALUES from "constants/constantValues";
import SuppilerTableHead from "constants/supplierConstants/supplierTableHead";

export const getTableHead = (pageName?: string) => {
  if (pageName === CONSTANTVALUES.SUPPLIER) return SuppilerTableHead;
  else return [];
};
