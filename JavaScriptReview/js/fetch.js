"use strict"

window.addEventListener("load", function(){

    var div_users = document.querySelector("#usuarios");

    var usuarios = [];
    this.fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(data=>{
        usuarios = data;
        this.console.log(usuarios);

        usuarios.map((user,i)=>{
            let nombre = document.createElement('h2');
            nombre.innerHTML = i + user.name +user.email;

            div_users.append(nombre);

            this.document.querySelector(".loading").style.display = 'none';
        });

    });



});