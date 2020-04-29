"use strict"
function myFirstFunction(fruit1,fruit2,...all){

    console.log(fruit1);
    console.log(fruit2);
    console.log(all);

}


var fruits = ["orange","apple"]

myFirstFunction(...fruits,"1","2","3","4");
