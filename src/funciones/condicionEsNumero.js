function CondicionEsNumero(condiciones, entradaInput) {
  if (Number.isInteger(+entradaInput)) {
    return condiciones(entradaInput);
  } else {
    return [false, "No es un numero correcto"];
  }
}
export default CondicionEsNumero;
