//console.log(Math.sign(-3));
//console.log(Math.sign(-1));
//console.log(Math.sign(-4));
//console.log(Math.sign(-0));

function sign(x){
   
    if(x<0) console.log(-1);
    else if(x>0) console.log(1);
    else if(Object.is(x,0)) console.log(1);
    else if(Object.is(x,-0)) console.log(-1);
}

sign(-3);

