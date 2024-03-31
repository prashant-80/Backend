function fun(x){
    var i;
    if(x%2==0){
        i=0;
    }else{
        i=1;
    }
}
//both are  same 
function gun(){
    if(x%2==0){
        var i=0;
    } else{
        var i=1;
    }
    console.log(i);
}

gun(10);