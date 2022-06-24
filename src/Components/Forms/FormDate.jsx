import { Stack, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React from "react";
export default function FormDate({valueInputs, setValueInputs, showValues}) {
    return <>
     <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={valueInputs.date}
                onChange={(e) => {
                  setValueInputs((current) => {
                    return !showValues
                      ? { ...current, date: e }
                      : { ...current };
                  });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider></>
}