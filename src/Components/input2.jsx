import { TextField } from "@mui/material";
import React, { memo, useCallback } from "react";

function Input({
  placeholder,
  validacion,
  setValidaciones,
  validaciones,
  setValueInputs,
}) {
  const callback = useCallback((value) => {
    return validacion(value);
  });
  return (
    <div>
      <TextField
        onChange={(e) => {
          const valueInput = e.target.value;
          const resValidacion = callback(valueInput);
          console.log(resValidacion);
          setValidaciones((valor) => {
            return {
              ...valor,
              [placeholder]: resValidacion,
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
        helperText={
          validaciones[placeholder][2] ? validaciones[placeholder][2] : ""
        }
      />
      <hr style={{ width: "100%", marginLeft: "0" }} />
    </div>
  );
}
export default Input;
