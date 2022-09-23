process.on('message',(msg)=>{
    console.log(`'The client get the message: ${msg}'`)
    process.send('Pong');
    process.disconnect();
});