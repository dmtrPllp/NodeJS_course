
const fs=require('fs');
console.log('Init'); // cсинхронный код, выполняющийся при инициализации

setTimeout(()=>{                            //
 console.log(performance.now(), 'Timer 0'); // фаза таймеров 
},10);                                       //

setImmediate(()=>{              //
    console.log('Immetiate')    //фаза check
})                              //

fs.readFile('./data.txt', ()=>{ //
    console.log(`File readed`); // Фаза Poll
})                              //

setTimeout(()=>{                            
    for (let index = 0; index <100000000; index++) {
        
        
    }
    console.log('DOne');
    Promise.resolve().then(()=>{
        console.log('Promise inside timeout');
    });
   },0);

Promise.resolve().then(()=>{
    console.log('Promise');
});

process.nextTick(()=>{
    console.log('Tick!');
})

console.log('Final');// cсинхронный код, выполняющийся при инициализации

