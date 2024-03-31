//function expression invoked immdiately

function x(){
    console.log("Wow");
}

(function x(y){
    console.log("hi",y);
})("Prashant")  //imeadiately called..the moment we deefined it.it is called

x();
//usecase
//in naming collisions


