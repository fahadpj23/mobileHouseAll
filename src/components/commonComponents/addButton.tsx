import { FC, useState } from "react";
import { useContext } from "react";

import DynamiceFormCreate from "./dynamicFormCreate";
import { BillingContext } from "context/billingContext";
import { getAddFormDetails } from "utils/getAddFormDetails";

interface props {
  addNewDetails: any;
  pageName: string;
}
const AddButton: FC<props> = ({ addNewDetails, pageName }) => {
  const billingContext = useContext(BillingContext);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="bg-green-600 text-white p-2 rounded-md font-semibold">
        <button onClick={() => setModalOpen(!modalOpen)}>Add+</button>
      </div>
      {modalOpen && (
        <DynamiceFormCreate
          pageName={pageName}
          formFieldDetails={getAddFormDetails(pageName)}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};
export default AddButton;
