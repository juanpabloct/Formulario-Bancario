import React, { useRef } from "react";

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
} from "@mui/material";
import { useState } from "react";

import Input from "./input2";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import FormInputsText from "../variables/FormInputsText";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


export default function Forms() {
  const statePerson = ["Soltero", "Casado", "Divorciado"];
  const [valueInputs, setValueInputs] = useState([]);
  const [validaciones, setValidaciones] = useState({});
  const refImg=useRef()
  console.log(validaciones);
  return (
    <form action="" className="">
      <div className="flex flex-col w-1/2 m-auto gap-4">
        {FormInputsText.map((input, index) => {
          const { placeholder, validacion } = input;
          return (
            <Input
              setValidaciones={setValidaciones}
              validacion={validacion}
              setValueInputs={setValueInputs}
              key={index}
              placeholder={placeholder}
              validaciones={validaciones}
            />
          );
        })}
        <FormControlLabel
        className="checkbox"
        onClick={(e)=>{setValueInputs((current)=>{return{ ...current, trabaja:e.target.checked}})}}
          control={<Checkbox/>}
          label="Trabaja"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Selecciona tu estado
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valueInputs.estado?valueInputs.estado:''}
            label="Selecciona tu estado"
            onChange={(e)=>{
              setValueInputs((current)=>{return {...current, estado:e.target.value}})
            }}
          >
            {statePerson.map((value, index) => {
              return (
                <MenuItem key={index} value={value} >
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <hr />

        <label htmlFor="description">Descripción</label> <br />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="6"
          className="border-2 border-zinc-600 ml-4"
          placeholder="Porque quiere solicitar el crédito"
          style={{fontFamily:'italic'}}
          onChange={(e)=>{setValueInputs((current)=>{return {...current, description:e.target.value}})}}
        />

      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={valueInputs.date?valueInputs.date:''}
        
          onChange={(e)=>{setValueInputs((current)=>{
            return {...current, date:e}})}
          }
          renderInput={(params) => <TextField {...params} />}
        />         
        </Stack>
      </LocalizationProvider>
      <input type="file" name="" id="" ref={refImg} onChange={(e)=>{setValueInputs((current)=>{return {...current, image:URL.createObjectURL(e.target.files[0])}})}}/>
      
      <img src={valueInputs.image?valueInputs.image:''} alt="No hay imagen todavia" />
      <Button variant="contained" disabled={''}>Enviar</Button>
    </form>
  );
}
