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
          setValidations((valor) => {
            return {
              ...valor,
              [placeholder]: resValidacion,
            };
          });
          setValueInputs((valor) => {
            return !showValues
              ? {
                  ...valor,
                  [placeholder]: e.target.value,
                }
              : { ...valor };
          });
        }}
        id="outlined-basic"
        label={placeholder}
        variant="outlined"
        sx={{ width: "100%" }}
        error={validations[placeholder] && !validations[placeholder][0]}
        helperText={validations[placeholder] && validations[placeholder][1]}
      />
      <hr style={{ width: "100%", marginLeft: "0" }} />
    </div>
  );
}
export default memo(InputText);
