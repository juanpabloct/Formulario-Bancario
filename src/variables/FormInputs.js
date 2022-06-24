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
        return [false, "Characteres invalids"];
      } else {
        return [true, "Characteres corrects"];
      }
    },
  },
  {
    placeholder: "lastName",
    validacion: (validacion) => {
      if (Number.isInteger(+validacion)) {
        return [false, "Caracteres invalidos"];
      } else {
        return [true, "Name correct"];
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
        return [false, "Not is a number correct"];
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
        return [false, "Not is a number correct"];
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
