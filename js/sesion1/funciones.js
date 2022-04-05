//function Declaration

//Hoisting detecta antes de la declaracion en un function nativa

//restar();
function restar() {
  console.log(10 - 5);
}
//restar();

//Function Expression
//restar2(); Error de hoisting
const restar2 = function () {
  console.log(10 - 5);
};
//restar2();
const n1 = 10;
const n2 = "20";

//function
//console.log(n2);
//console.log(typeof Number(n2));
//console.log(n1);
//console.log(typeof n1.toString());

function sumar(a, b) {
  console.log("Suma " + a + " + " + b);
  console.log(a + b);
  return a + b;
}
//sumar(10, 16);
//sumar(24, 67);

const saludar = function (nombre = "Juan") {
  console.log(`hola ${nombre}`);
};
//saludar();
//saludar("cely");

function proceso(nombre, n1, n2) {
  console.log("inicio");
  saludar(nombre);
  console.log("suma dos numeros");
  const suma = sumar(n1, n2);
  console.log(`la suma es ${suma}`);
  console.log("fin");
}
/*
const nombre = prompt("Ingresar su nombre");
const nu1 = Number(prompt("Ingresar primer numero"));
const nu2 = Number(prompt("Ingresar primer segundo"));
proceso(nombre, nu1, nu2);*/

function obtenerDatos(nombres, apellidos) {
  return `${nombres} ${apellidos}`;
}
const datos = obtenerDatos("juan", "lucas");
console.log(datos);

//funciones de flechas
const saludar3 = (nombre) => {
  console.log(nombre);
};
saludar3("jose");
