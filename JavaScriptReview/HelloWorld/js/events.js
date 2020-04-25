"use strict"

window.addEventListener("load", () =>{



function cambiarColor(){
    console.log("click");
    var bg = boton.style.background;
    if(bg == "green"){
        boton.style.background = "red";
    }else{
        boton.style.background = "green";
    }
    boton.style.padding = "10px";
}

var boton = document.querySelector("#boton");
boton.addEventListener('click', a=> {cambiarColor()});


boton.addEventListener('mouseover',function(){
    boton.style.background="yellow";
});

boton.addEventListener('mouseout',function(){
    boton.style.background="black";

});

var input = document.querySelector("#campo_nombre");
input.addEventListener("focus",function(){
    console.log("[focus] Estas dentro del input");
});

input.addEventListener("blur",function(){
    console.log("[blur] Estas dentro del input");
});

input.addEventListener("keydown",function(event){
    console.log("Pulsando esta tecla",String.fromCharCode(event.keyCode));
});

input.addEventListener("keypress",function(event){
    console.log("Tecla presionada",String.fromCharCode(event.keyCode));
});


input.addEventListener("keyup",function(event){
    console.log("Tecla soltada",String.fromCharCode(event.keyCode));
});

});