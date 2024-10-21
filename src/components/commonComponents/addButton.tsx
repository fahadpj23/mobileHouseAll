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
  return (
    <>
      <div className="bg-green-600 text-white p-2 rounded-md font-semibold">
        <button onClick={billingContext?.handleFormModal}>Add+</button>
      </div>
      {billingContext?.modalOpen && (
        <DynamiceFormCreate
          pageName={pageName}
          formFieldDetails={getAddFormDetails(pageName)}
          addNewDetails={addNewDetails}
          modalOpen={billingContext?.modalOpen}
          handleFormModal={billingContext?.handleFormModal}
        />
      )}
    </>
  );
};
export default AddButton;
