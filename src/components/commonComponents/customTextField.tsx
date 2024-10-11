import { TextField } from "@mui/material";
import { FC } from "react";

interface props {
  label?: string;
  type?: string;
}
const CustomTextField: FC<props> = (props) => {
  const { label, type } = props;
  return (
    <div>
      <div>
        <TextField
          name={label}
          id={label}
          label={label}
          variant="outlined"
          type={type}
        />
      </div>
    </div>
  );
};
export default CustomTextField;
