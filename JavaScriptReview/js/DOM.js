"use strict"


function cambiarColor(color){
    caja.style.background = color;
}


// Elementos con id único
//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

//Elementos por etiqueta
var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);

var contenido = todosLosDivs[2];
contenido.innerHTML = "SPARTAAAAAAAAAAAAAAAAAAAAAA";
contenido.style.background = "green";

console.log(caja);

console.log(contenido);

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
for(let valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

seccion.append(hr);

var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");

divsAmarillos[0].style.background = "yellow";

for (let div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "gray";
    }
}

var id = document.querySelector("#encabezado");

console.log(id);

var claserojo = document.querySelector("div");
console.log(claserojo);
