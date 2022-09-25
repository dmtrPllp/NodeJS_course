const {compute} = require("./factorial");
const {parentPort,workerData}= require('worker_threads');

parentPort.postMessage(compute(workerData));