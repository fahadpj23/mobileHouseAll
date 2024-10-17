import { TextField } from "@mui/material";
import { FC } from "react";

interface props {
  label?: string;
  type?: string;
  fieldProps?: any;
}
const CustomTextField: FC<props> = (props) => {
  const { label, type, fieldProps } = props;
  console.log(type);
  return (
    <div>
      <div>
        <TextField
          fullWidth
          name={fieldProps.id}
          id={fieldProps.id}
          label={label}
          variant="outlined"
          type="number"
          multiline={type == "number" ? false : true}
          rows={fieldProps.multiline ? 4 : 1}
        />
      </div>
    </div>
  );
};
export default CustomTextField;
