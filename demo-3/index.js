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