"use strict";
var teacher = "sarthak";  //way to make a global   scope 
function fun(){
    var teacher ="prashant"    //not accesible outside
    console.log(teacher);
    content = "js";  //automatic become global  if assigned a value
}

function gun(){
    var teacher ="Sanket"; //formal declaration we only look for formal declaration in parsing phase and assighn them scope
    console.log(teacher);
}

fun();
gun();
console.log(teacher);
console.log(content);