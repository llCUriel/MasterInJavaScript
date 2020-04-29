"use strict"

var text = "Hola este es mi mejor curso de la vida curso"

var busqueda = text.indexOf("curso");

console.log(busqueda);


var busqueda2 = text.lastIndexOf("curso");

console.log(busqueda2);


var busqueda3 = text.search("cursos");

console.log(busqueda3);

var busqueda4 = text.match(/curso/g);

console.log(busqueda4);

var busqueda5 = text.substr(14,5);

console.log(busqueda5);

var busqueda6 = text.charAt(4);

console.log(busqueda6);

var busqueda7 = text.startsWith("Ho");

console.log(busqueda7);

var busqueda8 = text.includes("vida");

console.log(busqueda8);


var busqueda9 = text.replace("mejor","peor");

console.log(busqueda9);

var busqueda10 = text.slice(14,20);

console.log(busqueda10);

var busqueda11 = text.split(" ");

console.log(busqueda11);

var busqueda12 = text.trim();

console.log(busqueda12);

var busqueda13 = prompt("Ingresa tu nombre");
var busqueda14 = prompt("Ingresa tu apellido");

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${busqueda13}</h3>
    <h3>Mi apellido es: ${busqueda14}</h3>
`;

document.write(texto);

