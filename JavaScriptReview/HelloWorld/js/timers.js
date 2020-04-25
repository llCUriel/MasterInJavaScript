"use strict"

window.addEventListener("load", function(){

    var tiempo = setInterval(function(){
        console.log("Set Interval ejecutado");
        var encabezado = document.querySelector("h1");
        if(encabezado.style.fontSize == "50px"){
            encabezado.style.fontSize = "30px";
        }else{
            encabezado.style.fontSize = "50px";
        }
    },3000);

    var stop = document.querySelector("#stop");

    stop.addEventListener("click",function(){
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");


});