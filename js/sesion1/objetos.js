// const nombre = "José";
// const apellido = "Velasque";
// const edad = 23;

// Objeto literal
const datosPersonales = {
  nombre: "José",
  apellido: "Velasque",
  edad: 23,
};

// Acceder a un valor
console.log(datosPersonales.nombre);
console.log(datosPersonales.apellido);
console.log(datosPersonales.edad);

console.log(datosPersonales["nombre"]);
console.log(datosPersonales["apellido"]);
console.log(datosPersonales["edad"]);

//agregando un valor
datosPersonales.pais = "Peru";
console.log(datosPersonales);

//eliminar valor
delete datosPersonales.pais;
console.log(datosPersonales);

//destructuring -Accede al valor de segunda forma
const { nombre, apellido, edad } = datosPersonales;

console.log(nombre);
console.log(apellido);
console.log(edad);

const datosPersonales2 = {
  nombre: "jose",
  apellido: "velasque",
  edad: 18,
  estadisticas: {
    anotacion: 100,
    asistencia: 200,
    gol: 2000,
  },
};
console.log(datosPersonales2);
console.log(datosPersonales2);
console.log(datosPersonales2.edad);
console.log(datosPersonales2.estadisticas.asistencia);

const {
  nombre: name2,
  apellido: lesName,
  edad: age,
  estadisticas: { anotacion, asistencia, gol },
} = datosPersonales2;
console.log(`${name2} ${lesName} ${age} ${anotacion}`);

// Congelar un objeto --- no realizar modificaciones
//Object.freeze(datosPersonales2);
datosPersonales2.pais = "colombia";

console.log("----------------");
console.log(datosPersonales2);
//delete datosPersonales2.estadisticas;
datosPersonales.nombre = "Juan";
console.log("----------------");

console.log(Object.isFrozen(datosPersonales2));

// Sellar un objeto ---- no realizar cambios en propipedades pero si en sus valores
Object.seal(datosPersonales2);
datosPersonales2.pais = "Perú";
delete datosPersonales2.estadisticas;
datosPersonales2.nombre = "Juan";
console.log("----------------");
console.log(datosPersonales2);
console.log("----------------");
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
