let a = 'Hello';

if(typeof a == 'string'){

}

let b: typeof a;

type Coord2= {
    lat:number;
    long:number;
}

type P = keyof Coord2;
let a3:P='long';


function logg(a: string | null){
    a?.toLowerCase();
}