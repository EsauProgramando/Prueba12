const nombre = "Jose";
console.log(typeof nombre); //tipo de variable
console.log(nombre);

//minusculas - mayusculas
const nombreMinus = nombre.toLocaleLowerCase();
console.log(nombreMinus);
const nombreMayus = nombre.toUpperCase();
console.log(nombreMayus);
console.log(`${nombreMinus} ${4}`);

const texto = "Bootcamp PachaQTec";
//charAt
console.log(texto.charAt(4));
//endswith()
console.log(nombreMinus.endsWith("e"));
console.log(nombreMinus.endsWith("se"));

//includes() busca y devuelve true/false
const texto3 = "hola mundo otra v:";
console.log("Incluye", texto3.includes("e"));

//indexOf() te devuelve la posicion del elemento
console.log("Blue whale".indexOf("e"));

//trim() quita espacio en blanco
const texto4 = "    hola Mundo  ";
console.log(texto4);
console.log(texto4.trim());

//"Robin Singh" ==> ["Robin", "Singh"]

const variable = "Robin Singh";
const variable2 = "I love arrays they are my favorite";
console.log(variable.split(" "));
console.log(variable2.split(" "));
