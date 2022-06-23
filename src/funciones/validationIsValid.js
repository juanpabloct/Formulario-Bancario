export default function validationIsValid(validation) {
  const isCorrect = [];
  for (let i in validation) {
    isCorrect.push(validation[i][0]);
  }
  if (isCorrect.length > 5) {
    const respuesta = isCorrect.every((value) => {
      return value === true;
    });

    return respuesta;
  } else {
    return false;
  }
}
