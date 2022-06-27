import React from "react";

import { Checkbox, FormControlLabel, Button, Grid } from "@mui/material";
import { useState } from "react";

import { FormInputsText, FormInputsNumbers } from "../../variables/FormInputs";

import validationIsValid from "../../funciones/validationIsValid";
import InputText from "./inputText";
import InputNumber from "./inputNumber";
import FormDataImg from "./FormDataImg";
import FormDate from "./FormDate";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import { camposInputs } from "../../variables/camposInputs";

export default function AllForms({
  valueInputs,
  setValueInputs,
  setShowValues,
  showValues,
  setCopyvalueInputs,
}) {
  //all validation
  const [validaciones, setValidaciones] = useState({});
  //Validations from input for active button
  const responseValidation = validationIsValid(validaciones);
  return (
    <form action="" className="" style={{ width: "90%", margin: "auto" }}>
      {/*Form of input type text*/}
      <Grid container columns={2} justifyContent={"center"} spacing={2}>
        {FormInputsText.map((input, index) => {
          const { placeholder, validacion } = input;
          return (
            <Grid item xs={2} md={2} lg={1} key={index}>
              <InputText
                setValidations={setValidaciones}
                validation={validacion}
                setValueInputs={setValueInputs}
                valueInputs={valueInputs}
                showValues={showValues}
                key={index}
                placeholder={placeholder}
                validations={validaciones}
              />
            </Grid>
          );
        })}
        {/*Form of input type Numbers*/}
        {FormInputsNumbers.map((input, index) => {
          const { placeholder, validacion, length } = input;
          return (
            <Grid item xs={2} md={2} lg={1} key={index}>
              <InputNumber
                setValidaciones={setValidaciones}
                validacion={validacion}
                length={length}
                setValueInputs={setValueInputs}
                valueInputs={valueInputs}
                showValues={showValues}
                key={index}
                placeholder={placeholder}
                validaciones={validaciones}
              />
            </Grid>
          );
        })}
        {/*Form of checkbox work*/}
        <Grid item xs={2} md={2} lg={2}>
          <FormControlLabel
            className="checkbox"
            onClick={(e) => {
              setValueInputs((current) => {
                return { ...current, work: e.target.checked };
              });
            }}
            control={<Checkbox />}
            label="Trabaja"
          />
          <hr />
        </Grid>
        {/*Form of select type state */}
        <Grid item xs={2} md={2} lg={2}>
          <FormSelect
            setValueInputs={setValueInputs}
            valueInputs={valueInputs}
            showValues={showValues}
          />
          <hr />
        </Grid>
        {/*Form de input type text description*/}
        <Grid item xs={2} md={2} lg={2}>
          <FormTextarea
            setValueInputs={setValueInputs}
            valueInputs={valueInputs}
            showValues={showValues}
          />
          <hr />
        </Grid>
        {/*input of date*/}
        <Grid item xs={2} md={2} lg={2}>
          <FormDate
            setValueInputs={setValueInputs}
            valueInputs={valueInputs}
            showValues={showValues}
          />
          <hr />
        </Grid>
        {/*Form of input type file image*/}
        <Grid item xs={2} md={2} lg={1}>
          <FormDataImg
            setValueInputs={setValueInputs}
            showValues={showValues}
          />
        </Grid>
        <br />
        <Grid item justifyContent={"center"} display={"flex"}>
          <img
            src={!showValues && valueInputs.image ? valueInputs.image : ""}
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
            onClick={() => {
              setCopyvalueInputs((current) => {
                return [...current, valueInputs];
              });
              setValueInputs(camposInputs);
              setShowValues(true);
            }}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
