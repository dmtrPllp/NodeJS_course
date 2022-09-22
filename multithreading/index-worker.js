const fact = require("./factorial");
const {Worker}= require('worker_threads');

const compute=(array)=>{
    return new Promise((resolve,reject)=>{
        const worker=new Worker('./worker.js', {
            workerData: {array}
        });
        worker.on('message', (msg)=>{
            console.log(worker.threadId);
            resolve(msg);
        });
        worker.on('error', (err)=>{
            reject(err);
        });
        worker.on('exit',()=>{
            console.log('The work is end');
        });
    });
}

const testMain=async ()=>{
    try{
        performance.mark('start');
        const res= await Promise.all([ 
            compute([25,20,19,48,50,41]),
            compute([25,20,19,48,50,41]),
            compute([25,20,19,48,50,41]),
            compute([25,20,19,48,50,41]),
            compute([25,20,19,48,50,41]),
            compute([25,20,19,48,50,41]),
            compute([25,20,19,48,50,41]),
        ]);
        console.log(res);
    
    
        performance.mark('end');
        performance.measure('main','start','end');
        console.log(performance.getEntriesByName('main').pop());
    }
    catch(e){
        console.log('ERRRRROOOOOOOOR!')
    }
   
}
setTimeout(()=>{
    console.log('Timeout');
},2000);

testMain();