import React, { memo, useMemo } from "react";
import { TextField } from "@mui/material";

function Input({ value, onChange, input: { validacions, placeholder } }) {
  const { valid, message } = useMemo(validateInput(validacions, value), [
    value,
  ]);
  return (
    <>
      <TextField
        onChange={(e) => {
          onChange({ name: placeholder, value: e.target.value });
        }}
        label={placeholder}
        variant="outlined"
        sx={{ width: "100%" }}
        value={value}
        error={!valid}
        helperText={message}
      />
      <hr style={{ width: "100%", marginLeft: "0" }} />
    </>
  );
}

export default memo(Input);
function validateInput(validacions, value) {
  return () => {
    let msg;
    let state;
    for (let validacion of validacions) {
      const result = validacion(value);
      if (typeof result === "boolean") {
      }
      if (Array.isArray(result)) {
        const [isValid, message] = result;
        msg = message;
        if (!isValid) {
          state = false;
          break;
        }
        state = true;
      }
    }
    return { valid: state, message: msg };
  };
}
