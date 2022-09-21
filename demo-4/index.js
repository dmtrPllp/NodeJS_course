 const start=performance.now();
// setTimeout(()=>{
//     console.log(performance.now()-start);
//     console.log('a second passed!');
// },1000);

// function myFunc(arg){
//     console.log(`Arg -> ${arg}`);
// }

// setTimeout(myFunc, 2000, '1');

// const timer1=setTimeout(()=>{
//     console.log(performance.now()-start);
//     console.log('Thanks for waiting!');
// },5000);


// setTimeout(()=>{
//     clearTimeout(timer1);
//     console.log('Clear!');
// },1000);

// const interval1= setInterval(()=>{
//     console.log(performance.now());
// },1000);

// setTimeout(()=>{
//     clearInterval(interval1);
//     console.log('Clear!');
// },5000);

// console.log('before');
// setImmediate(()=>{
//     console.log('In the end');
// })
// console.log('after');





const timer1=setTimeout(()=>{
    console.log(performance.now()-start);
    console.log('Thanks for waiting!');
},5000);

timer1.unref();
setImmediate(()=>{
    timer1.ref();
})