const pais = new Array(
  "Argentina",
  "Brasil",
  "Chile",
  "Colombia",
  "Uruguay",
  "Bolivia"
);
//console.log(pais);
//console.table(pais);

/*for (let i = 0; i < pais.length; i++) {
  console.log(pais[i]);
}*/
pais.forEach((elemento, index) => {
  console.log("El index " + index + " elemento " + elemento);
});

const nuevoarrais = pais.map((el, index) => {
  /* if (el === "Bolivia") {
    return "hola";
  } else {
    return el;
  }*/
  if (el.length === 7) {
    return el;
  }
});
console.log(nuevoarrais);

const nuevoarrisfilter = pais.filter((el, index) => {
  if (index === 1) {
    return el;
  }
});

console.log(nuevoarrisfilter);
const indexelemento = pais.findIndex((elemento) => {
  if (elemento === "Chile") {
    return elemento;
  }
});
console.log(indexelemento); // la posicio del elemento

const numero = [1, 2, 3, 4, 5, 6];
const nombres = ["juan", "lucho", "arial", "lucas"];
const isclunum = numero.includes(3); //busca si le encuentra bota true false
console.log(isclunum);
const isclunom = nombres.includes("juan");
console.log(isclunom);

const ValorIncial = 0;
const sumatoria = numero.reduce(
  (valor_anterior, valor_actual) => valor_anterior + valor_actual,
  ValorIncial
);
console.log(sumatoria);
const elementoEcontrado = numero.find((elemento) => {
  if (elemento === 2) {
    return elemento;
  }
});
console.log(elementoEcontrado);

//concat arrais une arrais
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = arr1.concat(arr2, 5, 6); // 5 y 6 puede incluir mas elementos
console.log(arr3);
