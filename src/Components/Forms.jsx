import React from "react";

import {
  TextField,
  Checkbox,
  FormControlLabel,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import { useState } from "react";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {FormInputsText, FormInputsNumbers} from "../variables/FormInputs";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import validationIsValid from "../funciones/validationIsValid";
import InputText from "./inputText";
import InputNumber from "./inputNumber";

export default function Forms({ valueInputs, setValueInputs, setShowValues, showValues }) {
  const statePerson = ["Soltero", "Casado", "Divorciado"];
  const [validaciones, setValidaciones] = useState({});
  const responseValidation = validationIsValid(validaciones);
  return (
    <form action="" className="" style={{ width: "90%", margin:'auto' }}>
      <Grid container columns={2} justifyContent={"center"} spacing={2}>
        {FormInputsText.map((input, index) => {
          const { placeholder, validacion } = input;
          return (
            <Grid item xs={2} md={2} lg={1} key={index}>
              <InputText
                setValidaciones={setValidaciones}
                validacion={validacion}
                setValueInputs={setValueInputs}
                showValues={showValues}
                key={index}
                placeholder={placeholder}
                validaciones={validaciones}
              />
            </Grid>
          );
        })}
        {FormInputsNumbers.map((input, index) => {
          const { placeholder, validacion, length} = input;
          return (
            <Grid item xs={2} md={2} lg={1} key={index}>
              <InputNumber
                setValidaciones={setValidaciones}
                validacion={validacion}
                length={length}
                setValueInputs={setValueInputs}
                showValues={showValues}
                key={index}
                placeholder={placeholder}
                validaciones={validaciones}
              />
            </Grid>
          );
        })}
        <Grid item xs={2} md={2} lg={2}>
          <FormControlLabel
            className="checkbox"
            onClick={(e) => {
              setValueInputs((current) => {
                return { ...current, trabaja: e.target.checked };
              });
            }}
            control={<Checkbox />}
            label="Trabaja"
          />
          <hr />
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Selecciona tu estado
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={valueInputs.estado ? valueInputs.estado : ""}
              label="Selecciona tu estado"
              onChange={(e) => {
                setValueInputs((current) => {
                  return { ...current, estado: e.target.value };
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
          <hr />
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          <label htmlFor="description" style={{ fontFamily: "helvatica" }}>
            Descripción
          </label>
          <br />
          <textarea
            name="description"
            id="description"
            rows="3"
            className="border-2 border-zinc-600 ml-4"
            placeholder="Porque quiere solicitar el crédito"
            style={{
              fontFamily: "italic",
              width: "100%",
              border: "1px solid #acaaaa",
              fontSize: "1.2rem",
              resize: "none",
              overflow: "auto",
            }}
            onKeyUp={(e) => {
              setValueInputs((current) => {
                return { ...current, description: e.target.value };
              });
            }}
          />
          <hr />
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={valueInputs.date ? valueInputs.date : ""}
                onChange={(e) => {
                  setValueInputs((current) => {
                    return { ...current, date: e };
                  });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <hr />
        </Grid>
        <Grid item xs={2} md={2} lg={1}>
          <input
            style={{ margin: "auto" }}
            type="file"
            name=""
            id=""
            onChange={(e) => {
              setValueInputs((current) => {
                return {
                  ...current,
                  image: URL.createObjectURL(e.target.files[0]),
                };
              });
            }}
          />
        </Grid>
        <br />
        <Grid justifyContent={"center"} display={"flex"}>
          <img
            src={valueInputs.image ? valueInputs.image : ""}
            alt=""
            style={{ width: "50%", margin: "auto" }}
          />
        </Grid>
        <br />
        <Grid item xs={2} md={2} lg={2} style={{ display: "flex" }}>
          <Button
            variant="contained"
            disabled={!responseValidation}
            sx={{ margin: "auto" }}
            onClick={()=>{setShowValues(true)}}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}