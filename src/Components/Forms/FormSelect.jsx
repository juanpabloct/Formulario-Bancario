import { FormControl, InputLabel,   MenuItem,   Select,
} from "@mui/material";
import React from "react";
export default function FormSelect({valueInputs, setValueInputs, showValues}){
  const statePerson = ["Soltero", "Casado", "Divorciado"];
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Selecciona tu estado
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={valueInputs.estate}
              label="Selecciona tu estado"
              onChange={(e) => {
                setValueInputs((current) => {
                  return !showValues
                    ? { ...current, estate: e.target.value }
                    : { ...current };
                });
              }}
            >
              {statePerson.map((value, index) => {
                return (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
    )
}