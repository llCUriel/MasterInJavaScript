"use strict"
window.addEventListener("load", function(){

var pelicula = {
    titulo: 'Batman vs Superman',
    anio: 2017,
    pais: 'USA'
};


pelicula.titulo = "Jordienp";
var peliculas = [{titulo: 'Batman vs Superman',anio: 2017,pais: 'USA'},pelicula]

console.log(pelicula);
console.log(pelicula.titulo)

console.log(peliculas);

var index;

var div = document.querySelector("#midiv");

console.log(div);
for (index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo);
    p.style.background = "red";
    div.append(p);
}

});