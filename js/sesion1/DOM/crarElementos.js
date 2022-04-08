const nav = document.querySelector(".navbar");
const enlace = document.createElement("A");

enlace.textContent = "Segundo enlace";
enlace.href = "www.google.com";
//nav.appendChild(enlace);

nav.insertBefore(enlace, nav.children[0]); //antes del elemento
