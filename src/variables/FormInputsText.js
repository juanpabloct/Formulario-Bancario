import CondicionEsNumero from "../funciones/condicionEsNumero";


import {
  condicionEdad,
  condicionMensual,
  condicionNumeroTelefonico,
} from "../funciones/validations";
const FormInputsText = [
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
export default FormInputsText