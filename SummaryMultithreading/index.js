const {fork} = require('child_process');
const {Worker}= require('worker_threads');

const perf_hooks = require('perf_hooks');
const { readFileSync } = require('fs');
const file=readFileSync('./file.mp4')

const performanceObserver=new perf_hooks.PerformanceObserver((items,observer)=>{
    items.getEntries().forEach(el=>{
        console.log(`${el.name}: ${el.duration}`);
    });
});
performanceObserver.observe({entryTypes:['measure']});

function workerFunction (array){
   
    return new Promise((resolve,reject)=>{
        performance.mark('startWorker');
        const worker=new Worker('./worker.js', {
            workerData: {array,file}
        });
        worker.on('message',(msg)=>{
            performance.mark('endWorker');
            performance.measure('workerThread', 'startWorker','endWorker');    
            resolve(msg);
        });
       
    });
}

function forkFunction(array){
    return new Promise((resolve,reject)=>{
        performance.mark('startFork');
        const forkProcess=fork('./fork.js');
        forkProcess.send({array,file});


        forkProcess.on('message', (msg)=>{
            performance.mark('endFork');
            performance.measure('forkProc', 'startFork','endFork');
            resolve(msg);
        });
    });
}

const main=async() =>{
    await workerFunction([25,19,48,30]);
    await forkFunction([25,19,48,30]);
}


main();