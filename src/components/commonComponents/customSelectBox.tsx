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
}
const CustomSelectBox: FC<props> = ({ label, options }) => {
  const [selectedItem, setSelectedIem] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedIem(event.target.value as string);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedItem}
          label={label}
          onChange={handleChange}
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
