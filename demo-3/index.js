const EventEmmiter= require('events');
 
const myEE= new EventEmmiter();
 
const logDBCOnnection= ()=>{
    console.log('DB connected');
 
}
 
myEE.addListener('connected', logDBCOnnection);
myEE.emit('connected');
 
 myEE.removeListener('connected', logDBCOnnection);
// myEE.off('connected', logDBCOnnection);
// myEE.removeAllListeners('connected');
myEE.emit('connected');

myEE.on('message', (data)=>{
    console.log(`Get : ${data}`);
});
myEE.prependListener('message', ()=> console.log('prepend') );
myEE.emit('message', "Hello! Try to recieve my message!");



myEE.once('off', ()=>{
    console.log('I appear only once');
});
myEE.emit('off');  
myEE.emit('off');  


console.log(myEE.getMaxListeners());
myEE.setMaxListeners(1);
console.log(myEE.getMaxListeners());

console.log(myEE.listenerCount('message'));
console.log(myEE.listenerCount('off'));
console.log(myEE.listeners('message'));
console.log(myEE.eventNames());


myEE.on('error', (err)=>{
    console.log(`Error : ${err.message}`);
});

myEE.emit('error', new Error('Bad connection'));


// Event Target
const target = new EventTarget();
const logTarget= ()=>{
    console.log("Connected to target!");
}
target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));