const {parentPort,workerData}= require('worker_threads');
const fact = require("./factorial");

const compute=({array})=>{
    const arr=[];
    for (let i = 0; i < 100000000; i++) {
        arr.push(i * i);
    }
    return array.map(x=>fact(x));
}

parentPort.postMessage(compute(workerData))