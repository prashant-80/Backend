// 1. Inversion of control

//2. Callback hell → readability problem

let arr = [1,10,1000,9,2,3,11];
// arr.sort(function cmp(a, b) {
//      return a - b;
// })

//console.log(arr);



//Inversion of control

function doTask(fn, x){
// whole. implementation is done by team A
// fn(x*x); // calling my callback with square of x
// fn(x*x);
} // team A

// here team b tries to use it
doTask(function exec(num) { // due to callbacks, I am passing control of how exec should be called to doTask
// this is inversion of control
console.log("Woah num is", num);
}, 9);