//function which take another function as arguments these 
//are called  higher order functions
function f(x,fn){   
    /**
     * x -> number
     * fn -> function
     */
    console.log(x);
    console.log(fn);
    fn();
}

f(10,function exec(){
    console.log("I am an expression passed to a HOF");
})

let arr = [1,10,9,12,13,15,17,2,3,4];   //unsorted array
arr.sort();   //it sort the  siven array  //[expectation] -> might arrange elemeents  in inc order 
//default implementation of arr.sort() is  going to sort my array in lexicographical order

console.log(arr);

let b = [1,10,9,12,13,15,17,2,3,4];

b.sort(function cmp(a,b){  //higher order function
    return a-b;
})

console.log(b);
