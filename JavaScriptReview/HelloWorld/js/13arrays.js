var myFirstArray = ["Javascript", "Java","Javita","Javota","XD"];


myFirstArray.push("Edward");


myFirstArray.pop();

var indice = myFirstArray.indexOf('Javita');

if(indice>-1){
    myFirstArray.splice(indice,1);
}


document.write("<ul>");

myFirstArray.forEach(
    
(elemento,indice)=>{
    document.write("<li> "+indice+elemento+ "</li>")
}

);

document.write("</ul>");

console.log(myFirstArray.join());

var cadenas = "texto1,texto2,texto3";
var cadena_array = cadenas.split(",");
console.log(cadena_array);


var numeros = [5,4,5,6,4,6,6,4,4,3,4,5,6,5,4,3,3,9,8];

console.log(numeros.reverse());
console.log(numeros.sort());



for(let n in myFirstArray){

    console.log(myFirstArray[n]);
}



console.log(myFirstArray);

var busqueda = myFirstArray.find(
    
function(n){
    return n == "Javota";
}

);


var prices = [10,20,50,80];

var busqueda = myFirstArray.find(n => n == "Javota");

var busqueda2 = myFirstArray.findIndex(n => n == "Javota");

var busqueda3 = prices.some(price=> price<10);


alert(busqueda3);
alert(busqueda+busqueda2);
