import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useState } from "react";
import { KeyValuePair } from "../types";

type Props = {
  label: string;
  options: KeyValuePair[];
  fullWidth?: boolean;
  onChange: (value: any) => void;
};

const AutocompleteBox: React.FC<Props> = ({
  label,
  options,
  fullWidth,
  onChange
}) => {
  const [value, setValue] = useState<KeyValuePair | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <Autocomplete
      fullWidth={fullWidth}
      options={options}
      getOptionLabel={(option) => (option as KeyValuePair).value}
      inputValue={inputValue}
      value={value}
      onChange={(_event: any, newValue: KeyValuePair | null) => {
        setValue(newValue);
        onChange(newValue);
      }}
      onInputChange={(_event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export default AutocompleteBox;
