const nombre = "esau alberto";
const Apellido1 = "VEINTEMILLA PANDURO";
console.log(typeof nombre);
console.log(nombre);

//Minuscula y Mayuscula
const ApellidoMinuscula = Apellido1.toLowerCase();
console.log(ApellidoMinuscula);
const nombreMayuscula = nombre.toUpperCase();
console.log(nombreMayuscula);

//longitud del texto
const palabra = "Juan no esta qui";
console.log(palabra.length); //16 desde el 1 cuenta

// charAt() te devulve le caracter  su posicion desde el 0 cuenta
const texto1 = "hola como estas";
console.log(texto1);
console.log(texto1.charAt(6)); //0
console.log(texto1[8]);

//endsWith() pregunta si la palabra o letra se encuenta devuelve true/false
const texto2 = "Hola Mundo";
console.log(texto2.endsWith("Mundo")); // true verdadero false falso
console.log(texto2.endsWith("Hola")); // true verdadero false falso
console.log(texto2.endsWith("o")); // true verdadero false falso

//includes busca y se devuelve true / false
const texto3 = "Hola mundo otra vez";
console.log(texto3, texto3.includes("o"));

//indexOf busca devuelve 0 o -1(sino encuentra)
console.log("Blue Whale".indexOf("Blue"));
console.log("Blue Whale".indexOf("BlueT"));
console.log("Blue Whale".indexOf("Whale", 5));
//console.log("Blue Whale".indexOf("", 9));

//trim()
const texto4 = "  hola mundo   ";
console.log(texto4);
console.log(texto4.trim());

//subtring recorta la palabra
const texto5 = "fernando";
console.log(texto5.substring(0, 3));

//slice() recorta la palabra
const texto6 = "fernando";
console.log(texto6.slice(0, 3));

//split() separa en un arrais
const texto7 = "hola-mundo";
console.log(texto7.split("-"));

const str = "Robin Singh sda";
console.log(str.split(" "));
