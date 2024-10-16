import { FC, useState } from "react";
import DynamiceFormCreate from "./dynamicFormCreate";

interface props {
  formFieldDetails: any;
  addNewDetails: any;
}
const AddButton: FC<props> = ({ formFieldDetails, addNewDetails }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="bg-green-600 text-white p-2 rounded-md font-semibold">
        <button>Add+</button>
      </div>
      <DynamiceFormCreate
        formFieldDetails={formFieldDetails}
        addNewDetails={addNewDetails}
      />
    </>
  );
};
export default AddButton;
