const numero = 15;
const texto = "15";
console.log(typeof numero);

console.log(Math.max(13, numero));
console.log(Math.min(13, numero));

//la variable numero ¿es un "no" numero?
//is  Not A number

console.log(isNaN(numero));
console.log("texto", isNaN(texto));

const decimal = 10.4676;
console.log(decimal.toFixed(3)); // redondea a tres decimales

const numero4 = numero.toString();
console.log(typeof numero4);

const numero5 = parseInt(numero4);
console.log(typeof numero5);
