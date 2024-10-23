import { FC, useState } from "react";
import { useContext } from "react";

import DynamiceFormCreate from "./dynamicFormCreate";
import { BillingContext } from "context/billingContext";
import { getAddFormDetails } from "utils/getAddFormDetails";

interface props {
  pageName: string;
}
const AddButton: FC<props> = ({ pageName }) => {
  const billingContext = useContext(BillingContext);
  console.log(billingContext?.modalOpen);
  return (
    <>
      <div className="bg-green-600 text-white p-2 rounded-md font-semibold">
        <button onClick={() => billingContext?.handleFormModal()}>Add+</button>
      </div>
      {billingContext?.modalOpen && (
        <DynamiceFormCreate
          pageName={pageName}
          formFieldDetails={getAddFormDetails(pageName)}
          handleModal={billingContext.handleFormModal}
          modalOpen={billingContext?.modalOpen}
        />
      )}
    </>
  );
};
export default AddButton;
