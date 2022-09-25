function factorial(n){
    return( n===0 ? 1 : factorial(n-1)*n);
}

function compute({array}){
    const arr=[];
   for (let i = 0; i < 10000000; i++){
        arr.push(i*i);
   } 
    return array?.map(x=>factorial(x));
}

module.exports={factorial, compute}