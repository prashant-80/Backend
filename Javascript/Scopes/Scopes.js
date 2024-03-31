//Visibility,every thing(variable,function) inside your code will be used in one of the folloeing two ways
//1) either it will  br  getting somme value  assigned to it
//2) or  some value retrieve from it  

//var supports  function scope 
//let supports block and  function scopes 

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
