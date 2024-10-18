import { createContext, FC, useState } from "react";

interface MyContextType {
  modalOpen: boolean;
  handleFormModal: () => void;
}

export const BillingContext = createContext<MyContextType | undefined>(
  undefined
);
const BillingContextProvider: FC<any> = (props) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleFormModal = () => {
    console.log("Df");
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <BillingContext.Provider
        value={{
          modalOpen,
          handleFormModal,
        }}
      >
        {props.children}
      </BillingContext.Provider>
    </>
  );
};

export default BillingContextProvider;
