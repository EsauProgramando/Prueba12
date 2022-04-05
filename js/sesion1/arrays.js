const nombres = ["juan", "pedro", "maria", "jose", ["alberto", "lucho"]];
console.log(nombres[0]);
console.log(nombres[1]);
console.log(nombres[4][1]);
console.log(nombres[4][0]);

console.log(nombres.length);

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

//Agregar elementos con push al final del array
//console.log(nombres);
nombres.push("aaa");
//console.table(nombres);

//eliminar elementos con pop al final de array
nombres.pop();
console.log(nombres);

//eliminar elementos con pop al final de array
nombres.shift();
nombres.shift();
console.log(nombres);

const persona1 = {
  nombres: "juan",
  edad: 20,
};
const persona2 = {
  nombres: "juan2",
  edad: 18,
};

const arrayobj = [persona1, persona2];
console.log(arrayobj);

const arrayobj2 = [...arrayobj];
console.log(arrayobj2);
//Desturacion de arrays
const deportes = ["fulbol", " basquet", "voley"];
const [f, , v] = deportes;

console.log(v);
