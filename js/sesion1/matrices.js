const nombres = ["juan", "pedro", "maria", ["alberto", "jose"]];

/*console.log(nombre[0]);
console.log(nombre[1]);
console.log(nombre[2]);
console.log(nombre[3][0]);
console.log(nombre[3][1]);*/

console.log(nombres[3].length);
let cont = 0;
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}
//agregar elementos con push al final del array
nombres.push("alberto");
console.log(nombres);

//agregar elementos unshift al inicio del array
nombres.unshift("esau");
console.log(nombres);

// eliminar con pop al final del array
nombres.pop();
console.log(nombres);

//eliminar con shift al inicio del array
nombres.shift();
console.log(nombres);

const persona1 = {
  nombre: "Juan",
  edad: 20,
};

const persona2 = {
  nombre: "Pedro",
  edad: 30,
};
const arr = [persona1, persona2];
console.log(arr);
const arrObj = [...arr];
console.log(arrObj);

const deportes = ["FutbolA", "BasquetA", "VoleyA"];

//destructuracion de array
const [a, , c] = deportes;
console.log(a);
console.log(c);
