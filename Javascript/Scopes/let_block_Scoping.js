var teacher = "sanket";
function fun(){
    console.log(teacher); 
    console.log(content);   //throws the error    //the region before the declaration id temporal dead zone
    var teacher  = "pulkit";
    let content = "JS";
    
    if(content=="JS"){
        let hours = "120+";
        console.log(content,hours);   //content will be accesible 
    }
    console.log(teacher,content);
}

fun();
console.log(teacher);
console.log(content);    //error cannot be acces outside the block