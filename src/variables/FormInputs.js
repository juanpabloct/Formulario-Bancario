import CondicionEsNumero from "../funciones/condicionEsNumero";

import {
  condicionEdad,
  condicionMensual,
  condicionNumeroTelefonico,
} from "../funciones/validations";
export const FormInputsText = [
  {
    placeholder: "name",
    validacion: (validacion) => {
      if (Number.isInteger(+validacion)) {
        return [false, "Caracteres invalidos"];
      } else {
        return [true, "Caracteres correctos"];
      }
    },
  },
  {
    placeholder: "lastName",
    validacion: (validacion) => {
      if (Number.isInteger(+validacion)) {
        return [false, "Caracteres invalidos"];
      } else {
        return [true, "Nombre correcto"];
      }
    },
  },
];
export const FormInputsNumbers = [
  {
    placeholder: "Age",
    validacion: (valorInput) => {
      if (Number.isInteger(+valorInput)) {
        return CondicionEsNumero(condicionEdad, valorInput);
      } else {
        return [false, "No es un numero correcto"];
      }
    },
    length: 2,
  },
  {
    placeholder: "Money month",
    validacion: (valorInput) => {
      if (Number.isInteger(+valorInput)) {
        return CondicionEsNumero(condicionMensual, valorInput);
      } else {
        return [false, "No es un numero correcto"];
      }
    },
  },
  {
    placeholder: "Number phone",
    validacion: (valorInput) => {
      return CondicionEsNumero(condicionNumeroTelefonico, valorInput);
    },
    length: 10,
  },
  {
    placeholder: "Fixed number",
    validacion: (valorInput) => {
      return CondicionEsNumero(condicionNumeroTelefonico, valorInput);
    },
    length: 10,
  },
];
