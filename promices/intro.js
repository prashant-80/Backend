//promise is just a object  
//creation of the  promise object  is synchronous in nature
//promise object  is a place holder for the data  we hope to get  back sometime in future 
//promise get  returned immediately

//states of promise object
//1)pending - when we create a new promise object this is  default state
//2)fullfiled - if the operation is completed succesfully
//3) rejected - if op was not succesfull


//creating  a new promise object
//new Promise(f)   //this constructor expects a callback

new Promise(function(resolve,regret){
    //inside this function we can write our time consuming task;
})