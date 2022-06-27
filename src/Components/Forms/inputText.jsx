import { TextField } from "@mui/material";
import React, { memo, useCallback } from "react";

function InputText({
  placeholder,
  validation,
  showValues,
  setValidations,
  validations,
  setValueInputs,
  valueInputs,
}) {
  const callback = useCallback((value) => {
    return validation(value);
  });
  return (
    <div>
      <TextField
        value={valueInputs[placeholder]}
        onChange={(e) => {
          const valueInput = e.target.value;
          const resValidacion = callback(valueInput);
          setValidations((current) => {
            return {
              ...current,
              placeholder: resValidacion,
            };
          });
          setValueInputs((valor) => {
            return {
              ...valor,
              [placeholder]: e.target.value,
            };
          });
        }}
        id="outlined-basic"
        label={placeholder}
        variant="outlined"
        sx={{ width: "100%" }}
        error={validations[placeholder] && !validations[placeholder][0]}
        helperText={
          validations[placeholder] &&
          !validations[placeholder][0] &&
          validations[placeholder][1]
        }
      />
      <hr style={{ width: "100%", marginLeft: "0" }} />
    </div>
  );
}
export default memo(InputText);
