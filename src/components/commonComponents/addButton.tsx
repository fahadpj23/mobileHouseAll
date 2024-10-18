import { FC, useState } from "react";
import { useContext } from "react";

import DynamiceFormCreate from "./dynamicFormCreate";
import { BillingContext } from "context/billingContext";

interface props {
  formFieldDetails: any;
  addNewDetails: any;
}
const AddButton: FC<props> = ({ formFieldDetails, addNewDetails }) => {
  const billingContext = useContext(BillingContext);
  return (
    <>
      <div className="bg-green-600 text-white p-2 rounded-md font-semibold">
        <button onClick={billingContext?.handleFormModal}>Add+</button>
      </div>
      <DynamiceFormCreate
        formFieldDetails={formFieldDetails}
        addNewDetails={addNewDetails}
        modalOpen={billingContext?.modalOpen}
        handleFormModal={billingContext?.handleFormModal}
      />
    </>
  );
};
export default AddButton;
