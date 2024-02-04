function add(name){
    return name;
}

function butoon(bool){
    if(bool == true) console.log("you have pressed this button");
}

let a = 10;
let b = 20;
console.log(add("prashant"));
butoon(true);

//functons in java is very easy 
//there are 3 types of function in javascript

function fibonacci(n){
    let a=0;
    let b= 1;
    for(let i =2 ; i<n;i++){
        c = a +b;
        a = b;
        b = c;

    }
    return c;

}

console.log(fibonacci(5));