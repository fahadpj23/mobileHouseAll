import { FC, useState } from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface optionsValues {
  id: string | number;
  label: string;
}

interface props {
  label: string;
  options?: optionsValues[];
  fieldProps?: any;
  formik?: any;
}
const CustomSelectBox: FC<props> = ({ label, options, fieldProps, formik }) => {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id={fieldProps.id}
          name={fieldProps.id}
          value={formik[label]}
          label={label}
          onChange={formik.handleChange}
        >
          {options?.map((option: optionsValues) => (
            <MenuItem key={option?.id} value={option?.id}>
              {option?.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default CustomSelectBox;
