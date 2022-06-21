export const condicionEdad = (validacion) => {
  if (validacion.length > 0 && validacion.length < 3) {
    return [true, "Edad correcta"];
  } else {
    return [false, "Edad incorrecta"];
  }
};
export const condicionMensual = (validacion) => {
  if (validacion.length >= 2) {
    return [true, "Dinero correcto"];
  } else {
    return [false, "La cifra no existe en moneda Colombiana"];
  }
};
export const condicionNumeroTelefonico = (validacion) => {
  if (validacion.length > 7 && validacion.length <= 10) {
    return [true, "Numero Telefonicio valido"];
  } else {
    return [false, "El numero telefonico no es valido"];
  }
};
