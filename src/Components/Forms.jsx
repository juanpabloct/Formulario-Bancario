import React, { useEffect } from "react";

import {
  TextField,
  Checkbox,
  FormControlLabel,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import CondicionEsNumero from "../funciones/condicionEsNumero";
import {
  condicionEdad,
  condicionMensual,
  condicionNumeroTelefonico,
} from "../funciones/validations";
import Input from "./input2";

export default function Forms() {
  const statePerson = ["Soltero", "Casado", "Divorciado"];
  const [valueInputs, setValueInputs] = useState([]);
  const [validaciones, setValidaciones] = useState([]);
  console.log(validaciones);
  const inputs = [
    {
      placeholder: "nombre",
      validacion: (validacion) => {
        if (Number.isInteger(+validacion)) {
          return [false, "Caracteres invalidos"];
        } else {
          return [true, "Caracteres correctos"];
        }
      },
    },
    {
      placeholder: "Apellido",
      validacion: (validacion) => {
        if (Number.isInteger(+validacion)) {
          return [false, "Caracteres invalidos"];
        } else {
          return [true, "Nombre correcto"];
        }
      },
    },
    {
      placeholder: "edad",
      validacion: (valorInput) => {
        if (Number.isInteger(+valorInput)) {
          return CondicionEsNumero(condicionEdad, valorInput);
        } else {
          return [false, "No es un numero correcto"];
        }
      },
    },
    {
      placeholder: "Dinero mensual",
      validacion: (valorInput) => {
        if (Number.isInteger(+valorInput)) {
          return CondicionEsNumero(condicionMensual, valorInput);
        } else {
          return [false, "No es un numero correcto"];
        }
      },
    },
    {
      placeholder: "Numero celular",
      validacion: (valorInput) => {
        return CondicionEsNumero(condicionNumeroTelefonico, valorInput);
      },
    },
    {
      placeholder: "Numero fijo",
      validacion: (valorInput) => {
        return CondicionEsNumero(condicionNumeroTelefonico, valorInput);
      },
    },
  ];
  return (
    <form action="" className="">
      <div className="flex flex-col w-1/2 m-auto gap-4">
        {inputs.map((input, index) => {
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
          control={<Checkbox defaultChecked />}
          label="Trabaja"
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Selecciona tu estado
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="Selecciona tu estado"
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

        <label htmlFor="">Descripción</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          className="border-2 border-zinc-600 ml-4"
          placeholder="Porque quiere solicitar el crédito"
        ></textarea>
      </div>
      <Button variant="contained">Hola</Button>
    </form>
  );
}
