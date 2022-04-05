const datosPersonales = {
  nombre: "jose",
  apellido: "velasque",
  edad: 18,
  estadisticas: {
    anotacion: 100,
    asistencia: 200,
    gol: 2000,
  },
};
console.log(datosPersonales);

//combinar objetos
const deportes1 = {
  fulbol: "Fulbol",
  basquet: "basquet",
};
const deportes2 = {
  voley: "Voley",
  tenis: "Tenis",
};
/*
const deportes = Object.assign(deportes1, deportes2);
console.log(deportes); */

//Spred Operator
const deportes3 = {
  ...deportes1,
  ...deportes2,
  fulbol: "fulbol 2",
  natacion: "natacion",
};
console.log(deportes3);

//Object Constructor

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}
const persona1 = new Persona("juan", 23);
console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.edad);

//Recorrer un Objeto
const datosPersonales1 = {
  nombre: "JOSE",
  apellido: "Velasque",
  edad: 7,
};
console.log(Object.keys(datosPersonales1));
console.log(Object.values(datosPersonales1));
console.log(Object.entries(datosPersonales1));

const obj = {};
const keys = Object.keys(obj);
console.log(keys.length > 0);
