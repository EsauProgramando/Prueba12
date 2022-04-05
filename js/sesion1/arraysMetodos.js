const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

numeros.forEach(function (elemento, index) {
  console.log("forEach", " ", index, " ", elemento);
});
numeros.map((elemento, index) => {
  console.log("forEach", " ", index, " ", elemento);
  return elemento;
});
const numero = numeros;
console.log(numero);
