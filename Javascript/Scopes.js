var teacher = "sarthak";  //way to make a global   scope 
function fun(){
    var teacher ="prashant"
    console.log(teacher);
}

function gun(){
    var teacher ="Sanket"; //formal declaration //we only look for formal declaration in parsing phase and assighn them scope
    console.log(teacher);
}

fun();
gun();
console.log(teacher);
