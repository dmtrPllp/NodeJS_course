 // * BASIC TYPES
 let a:number = 5;
 let b: string = '4';


 let c:number = a+Number(b);


 let d =true;

 let names: string[] = ['sd', 'sdsd'];
 let ages: number[] = [4, 2];

 let tup: [number, string] = [2, 'ds'];
 tup.push('dfdg');


 let e: any = 3;
 e = 'dsad';
 e = true;


 let anyArr: any[] = ['dasd', 3, true];


 function greet(name:string ):string{
    return name + 'hi';
 };


 names.map((x:string)=>x);
// *Знак вопроса говорит о том, что параметр необязателен
 function coord(coord:{lat:number, long?:number}){

 }