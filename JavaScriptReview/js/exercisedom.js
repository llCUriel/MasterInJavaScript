"use strict"

window.addEventListener("load",function(){
    console.log("dmon cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.getElementById("myBox");
    box_dashed.style.display = "none";
    formulario.addEventListener("submit",function(){

        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellidos").value;
        var edad = parseInt(document.getElementById("edad").value);


        
        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("nombre no valido");
            document.getElementById("error_nombre").innerHTML = "Nombre no válido";
            return false;
        }else{
            document.getElementById("error_nombre").style.display = "none";


        }

        if(apellido.trim() == null || apellido.trim().length == 0){
            alert("apellido no valido");
            return false;
        }

        if(edad<=0 || isNaN(edad) || edad==null){
            alert("edad no valida");
            return false;
        }
        
        

        box_dashed.style.display = "block";

        /*
        var p_nombre = document.getElementById("p_nombre span");
        var p_apellidos = document.getElementById("p_apellidos span");
        var p_edad = document.getElementById("p_edad span");


        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellido;
        p_edad.innerHTML = edad;
        */

        
        var  datos_usuario = [nombre,apellido,edad];
        
        for(var indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);

        }


    });

});