"use strict"
/*
var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}
*/

/*
function sumame(numero1,numero2,sumaYMuestra,sumaPorDos){
    var sumar = numero1+numero2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(6,7,
    function(dato){
        console.log("La suma es: ",dato);
    },
    function(dato){
        console.log("La suma por dos es: ",dato*2);
    }
);   
*/

function sumame(numero1,numero2,sumaYMuestra,sumaPorDos){
    var sumar = numero1+numero2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(6,7,
    dato =>{
        console.log("La suma es: ",dato);
    },
    dato =>{
        console.log("La suma por dos es: ",dato*2);
    }
);  