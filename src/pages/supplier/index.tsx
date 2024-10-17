import { useSelector } from "react-redux";
import { fetchSupplier, addSupplier } from "slice/supplierSlice";
import { useEffect } from "react";

import { useAppDispatch, RootState } from "store";

import DetailsPage from "components/commonComponents/detailsPage";
import SuppilerTableHead from "constants/supplierTableHead";

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

  const formFieldDetails = [
    {
      id: "name",
      label: "name",
      type: "text",
      allowNull: true,
    },
    {
      id: "address",
      label: "Address",
      type: "text",
      allowNull: false,
      multiline: true,
    },
    {
      id: "phone",
      label: "Phone Number",
      type: "number",
      allowNull: false,
    },
  ];

  console.log(entityList);
  return (
    <div>
      <DetailsPage
        formFieldDetails={formFieldDetails}
        addNewDetails={supplierAdd}
        tableHead={SuppilerTableHead}
        tableData={entityList}
      />
    </div>
  );
};
export default Supplier;
