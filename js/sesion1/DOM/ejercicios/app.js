const $body = document.querySelector("body");
const $h1 = document.createElement("h1");
const $ul = document.createElement("ul");

let $main = document.createElement("main");

$h1.textContent = "Pagina Principal";
$h1.classList.add("titulo");
$body.appendChild($h1);

let Arrayli = ["Inicio", "Nosotros", "Contacto"];

Arrayli.forEach((el) => {
  $li = document.createElement("li");
  $li.classList.add("item");
  $li.textContent = `${el}`;
  $ul.appendChild($li);
});
$body.appendChild($ul);

let Arraysection = [1, 2, 3];
Arraysection.forEach((el) => {
  $section = document.createElement("section");
  $main.appendChild($section);
  let $h2 = document.createElement("h2");

  $h2.textContent = `Subtitulo Pagina Principal ${el}`;
  $h2.classList.add("subtitulo");
  $section.appendChild($h2);

  const $p = document.createElement("p");
  $p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, esse. Provident commodi nostrum blanditiis quia expedita, veritatis quod hic est deserunt, corporis, illo inventore voluptatibus magnam deleniti eos dignissimos ea.`;
  $section.appendChild($p);
});
$body.appendChild($main);
