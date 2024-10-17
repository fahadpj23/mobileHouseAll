import { TextField } from "@mui/material";
import { FC } from "react";

interface props {
  label: string;
  type?: string;
  fieldProps?: any;
  formik?: any;
}
const CustomTextField: FC<props> = (props) => {
  const { label, type, fieldProps, formik } = props;
  return (
    <div>
      <div>
        <TextField
          fullWidth
          onChange={formik.handleChange}
          name={fieldProps.id}
          id={fieldProps.id}
          label={label}
          variant="outlined"
          type="number"
          multiline={type == "number" ? false : true}
          rows={fieldProps.multiline ? 4 : 1}
          error={
            formik.touched[fieldProps.id] &&
            Boolean(formik.errors[fieldProps.id])
          }
          helperText={
            formik.touched[fieldProps.id] && formik.errors[fieldProps.id]
          }
        />
      </div>
    </div>
  );
};
export default CustomTextField;
