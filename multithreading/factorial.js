module.exports= function fact(a){
    return a==0?1:fact(a-1)*a;
}