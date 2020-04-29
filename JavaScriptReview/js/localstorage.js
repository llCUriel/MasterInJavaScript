"use strict"
window.addEventListener("load", function(){

if(typeof Storage != 'undefined'){
    console.log("LocalStorage ready");
}

//Guardar
localStorage.setItem("titulo3","curso js");

//Recuperar
///console.log(localStorage.getItem("titulo"));

this.document.querySelector("#midiv").innerHTML = this.localStorage.getItem("titulo");


//Guardar objeto

var usuario = {
    nombre: "Cesar",
    email: "uuriel12009u@gmail.com",
    web:"uriel.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto

var user = JSON.parse(localStorage.getItem("usuario"));

console.log(user.nombre);

this.document.querySelector("#midiv").append(user.nombre);


//this.localStorage.removeItem("usuario");
this.localStorage.clear();
});


