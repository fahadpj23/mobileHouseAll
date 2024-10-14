import CustomSelectBox from "./customSelectBox";
import CustomTextField from "./customTextField";
import CustomFileUpload from "./customFileUpload";
import { Box, Modal } from "@mui/material";
import { FC } from "react";

interface props {
  formFieldDetails: any;
}

const DynamiceFormCreate: FC<props> = ({ formFieldDetails }) => {
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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
  };

  return (
    <div>
      <Modal open={true}>
        <Box sx={modalStyle}>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {formFieldDetails?.map((field: any) => {
                switch (field.type) {
                  case "text":
                  case "number":
                    return (
                      <CustomTextField
                        label={field.label}
                        type={field.type}
                        fieldProps={field}
                      />
                    );
                  case "select":
                    return (
                      <CustomSelectBox
                        label={field.label}
                        options={field.options}
                      />
                    );
                  case "file":
                    return <CustomFileUpload />;
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
