"use strict"

window.addEventListener("load", function(){

    function intervalo(){
        var tiempo = setInterval(function(){
            console.log("Set Interval ejecutado");
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        },200);
        return tiempo;
    }

    var tiempo = intervalo();
    var stop = document.querySelector("#stop");

    stop.addEventListener("click",function(){
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click",function(){
        intervalo();
    });


});