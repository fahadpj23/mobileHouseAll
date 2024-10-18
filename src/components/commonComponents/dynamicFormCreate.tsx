import { FC } from "react";
import { Box, Modal } from "@mui/material";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";

import CustomSelectBox from "./customSelectBox";
import CustomTextField from "./customTextField";
import CustomFileUpload from "./customFileUpload";
import supplierAddFormInitialValues from "constants/supplierConstants/supplierAddFormInitialValues";
import supplierValidationSchema from "constants/supplierConstants/supplierFormValidation";

interface props {
  formFieldDetails: any;
  addNewDetails?: any;
  modalOpen: boolean | undefined;
  handleFormModal?: () => void;
}

const DynamiceFormCreate: FC<props> = ({
  formFieldDetails,
  addNewDetails,
  modalOpen,
  handleFormModal,
}) => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
  };

  const formik = useFormik({
    initialValues: supplierAddFormInitialValues,
    enableReinitialize: true,
    validationSchema: supplierValidationSchema,
    onSubmit: (values) => {
      addNewDetails(values);
    },
  });

  return (
    <div>
      <Modal open={modalOpen ?? false}>
        <Box sx={modalStyle}>
          <div className="absolute right-0 top-0 ">
            <button onClick={handleFormModal}>
              <CloseIcon />
            </button>
          </div>
          <div className="mt-3">
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {formFieldDetails?.map((field: any) => {
                switch (field.type) {
                  case "text":
                  case "number":
                    return (
                      <CustomTextField
                        key={field?.id}
                        label={field.label}
                        type={field.type}
                        fieldProps={field}
                        formik={formik}
                      />
                    );
                  case "select":
                    return (
                      <CustomSelectBox
                        key={field?.id}
                        label={field.label}
                        options={field.options}
                        fieldProps={field}
                        formik={formik}
                      />
                    );
                  case "file":
                    return <CustomFileUpload key={field?.id} />;
                }
              })}
              <div className="w-full flex justify-end">
                <button
                  className="bg-green-500 text-white p-2 rounded-sm"
                  type="submit"
                >
                  submit
                </button>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default DynamiceFormCreate;
