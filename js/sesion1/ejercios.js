/*const array = [];
function findMultiples(datos, limite) {
  for (let i = 0; i <= limite; i += datos) {
    array.push(i);
  }
  array.shift();
  return console.log(array);
} 


findMultiples(5, 25);*/

/*function removeEveryOther(arr) {
  const newArras = arr.filter((element, index) => {
    if (index % 2 === 0) {
      return element;
    }
  });
  return newArras;
}*/

//console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//removeEveryOther(["Hello", "Goodbye", "Hello Again"]);
/*function getAge(min, max) {
  const num = Math.random() * (max - min) + min;
  if (num != 0) {
    return num;
  }
}
console.log(parseInt(getAge(0, 9)));*/
/*ejercio1
https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript */
// ejercio 2 https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
// ejercio 3 https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

//ejercio1
var countSheep = function (num) {
  let car = "";
  for (let i = 1; i <= num; i++) {
    //car = car + (i + " sheep...");
    //car += i + " sheep...";
    car += `${i} sheep...`;
  }
  return car;
};
//ejercio 2
function oddCount(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    if (i % 2 != 0) {
      arr.push(i);
    }
  }
  return arr.length;
}
console.log(oddCount(15023));
/*function num(n) {
  return Math.floor(n / 2);
}*/
//console.log(num(7));

//ejercio 3
console.log(countSheep(3));
function maps(x) {
  const arr = [];
  x.forEach((element) => {
    return arr.push(element * 2);
  });
  return arr;
}

console.log(maps([4, 8, 20, 40]));
