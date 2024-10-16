import DetailsPage from "components/commonComponents/detailsPage";

import { useSelector } from "react-redux";
import { fetchSupplier, addSupplier } from "slice/supplierSlice";
import { useEffect } from "react";

import { useAppDispatch, RootState } from "store";

const Supplier = () => {
  const appDispatch = useAppDispatch();
  const { loading } = useSelector((state: RootState) => state.supplier);

  useEffect(() => {
    appDispatch(fetchSupplier());
  }, [appDispatch]);

  const supplierAdd = () => {
    appDispatch(addSupplier());
  };

  const formFieldDetails = [
    {
      label: "name",
      type: "text",
      allowNull: true,
    },
    {
      label: "Address",
      type: "text",
      allowNull: false,
      multiline: true,
    },
    {
      label: "Phone Number",
      type: "number",
      allowNull: false,
    },
  ];
  return (
    <div>
      <DetailsPage
        formFieldDetails={formFieldDetails}
        addNewDetails={supplierAdd}
      />
    </div>
  );
};
export default Supplier;
