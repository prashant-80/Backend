/**
 * x-> number
 * fn -> function
 * 
 * 
 */
function fun(x,fn){    //fun is a higher  order  function
    for(let i=0;i<x;i++){
        console.log(i);
    }
    fn();
}

fun(10,function exec(){      //ecec is a callback 
        console.log("I am executed also");
})

//************************ */

setTimeout(function exec(){                     //exec is callback function
    console.log("Running after sometime");
},4000)






