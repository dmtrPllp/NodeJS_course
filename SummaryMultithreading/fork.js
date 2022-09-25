const {compute}=require('./factorial')

process.on('message',(msg)=>{
    process.send(toString(compute(msg)));
    process.disconnect();
});