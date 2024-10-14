import { TextField } from "@mui/material";
import { FC } from "react";

interface props {
  label?: string;
  type?: string;
  fieldProps?: any;
}
const CustomTextField: FC<props> = (props) => {
  const { label, type, fieldProps } = props;
  return (
    <div>
      <div>
        <TextField
          fullWidth
          name={label}
          id={label}
          label={label}
          variant="outlined"
          type={type}
          multiline
          rows={fieldProps.multiline ? 4 : 1}
        />
      </div>
    </div>
  );
};
export default CustomTextField;
