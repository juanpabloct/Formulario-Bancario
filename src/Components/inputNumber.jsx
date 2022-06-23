import { TextField } from "@mui/material";
import React, { memo, useCallback } from "react";

function InputNumber({
  placeholder,
  validacion,
  showValues,
  setValidaciones,
  validaciones,
  setValueInputs,
  length
}) {
  console.log();
  const callback = useCallback((value) => {
    return validacion(value);
  });
  return (
    <div>
      <TextField
          onChange={(e) => {
          const valueInput = e.target.value;
          const resValidacion = callback(valueInput);
          setValidaciones((valor) => {
            return {
              ...valor,
              [placeholder]: resValidacion,
            };
          });
         setValueInputs((valor) => {
            return !showValues?{
              ...valor,
              [placeholder]: e.target.value,
            }:{...valor}
          });
        }}
        inputProps={{
          maxlength: length
        }}        
        id="outlined-basic"
        label={placeholder}
        variant="outlined"
        sx={{ width: "100%" }}
        error={validaciones[placeholder]&&!validaciones[placeholder][0]}
        helperText={validaciones[placeholder]&&validaciones[placeholder][1]}
      />
      <hr style={{ width: "100%", marginLeft: "0" }} />
    </div>
  );
}
export default memo(InputNumber);
