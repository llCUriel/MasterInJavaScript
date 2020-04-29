"use strict"

var edad1 = 20;
var edad2 = 30;

if(edad1>edad2){
    console.log("1");
}else{
    console.log("2");
}

switch(edad1){
    case 18:
        console.log("xd");
    break;
    case 25:
        console.log("xd2");
    break;
    default:
        console.log("error");
    break;
}
/*
for(var i=0; i<1000;i++){
    console.log(i);
    debugger;
}
*/

/*
var year = 2020;

while(year<2051){
    console.log("anio:"+year);
    year++;
}
*/

var years = 30;

do{
    alert(years);
    years--;

}while(years>25);

