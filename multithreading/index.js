const fact = require("./factorial");

const compute=(array)=>{
    const arr=[];
    for (let i = 0; i < 100000000; i++) {
        arr.push(i * i);
    }
    return array.map(x=>fact(x));
}

const testMain=()=>{
    performance.mark('start');
    const res= [ 
        compute([25,20,19,48,50,11]),
        compute([25,20,19,48,50,11]),
        compute([25,20,19,48,50,11]),
        compute([25,20,19,48,50,11]),
        compute([25,20,19,48,50,11]),
        compute([25,20,19,48,50,11]),
        compute([25,20,19,48,50,11]),
    ]
    console.log(res);


    performance.mark('end');
    performance.measure('main','start','end');
    console.log(performance.getEntriesByName('main').pop());
}
setTimeout(()=>{
    console.log('Timeout');
},2000);

testMain();