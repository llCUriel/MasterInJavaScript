"use strict"
window.addEventListener("load", function(){

var formulario = document.querySelector("#miform");


formulario.addEventListener("submit",function(){    
    var titulo = document.querySelector('#addpelicula').value;

    if (titulo.length <=0) {
        alert("error");
    }else{
        localStorage.setItem(titulo,titulo);
    }
});


var ul = document.querySelector("#peliculaslist");
for(var i in localStorage){
    var data = this.localStorage[i];
    if(typeof data == 'string'){
        var li = document.createElement("li");
        li.append(data);
        ul.append(li);
    }
}

var formulario2 = document.querySelector("#formborrar");

formulario2.addEventListener("submit",function(){    
    var titulo = document.querySelector('#borrarpelicula').value;
    if (titulo.length <=0) {
        alert("error");
    }else{
        localStorage.removeItem(titulo,titulo);
    }
});




});

