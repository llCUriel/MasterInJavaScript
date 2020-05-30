"use strict"

window.addEventListener("load", function(){

    var div_users    = document.querySelector("#usuarios");

    var div_patricia = document.querySelector("#patricia");

    getUsuarios()
    .then(data => data.json())
    .then(data=> {
        listarUsuarios(data)
        return getPatricia();
    })
    .then(data => data.json())
    .then(patricia => {
        mostrarPatricia(patricia)
        return getInfo();
    })
    .then(data=>{
        console.log(data);
    });

    function getUsuarios(){
        return fetch("https://jsonplaceholder.typicode.com/users");
    }

    function getPatricia(){
        return fetch("https://jsonplaceholder.typicode.com/users/4");
    }

    function getInfo(){
        var profesor = {
            nombre: 'Victor',
            apellidos: 'Robles',
            url: 'https://victorroblesweb.es'
        };
        return new Promise((resolve,reject) =>{
            var profesor_string = "";

            setTimeout(function(){
                profesor_string = JSON.stringify(profesor);
            },3000);

            if(typeof profesor_string != 'string' || profesor_string == '')
                return reject('error');

            return resolve(profesor_string);

        });
    }
   
    function listarUsuarios(data){
        return data.map((user,i)=>{
            let nombre = document.createElement('h2');
            nombre.innerHTML = i + user.name +user.email;
            div_users.append(nombre);
            document.querySelector(".loading").style.display = 'none';
        });        
    }

    function mostrarPatricia(user){
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        nombre.innerHTML = user.name +user.email;
        avatar.src = "https://i.psnprofiles.com/avatars/l/Gc81a651ad.png";
        avatar.width = '100';

        div_patricia.append(nombre);
        div_patricia.append(avatar);
        document.querySelector(".loading2").style.display = 'none';
    }
 
});