if(true){
    var x =1;  //var only supports global scope and function scope //it is accessible anywhere in a scope also beffore declaration
}

{
    let a =10;  //supports block scopes //it is only be accesible below it declaration
}

console.log(x);
console.log(a);  //error