
type coord = { lat: number, long?: number };

interface ICoord {
    lat: number;
    long?: number;
}

type ID = number | string;
type myString = string;

function coord2(coord: ICoord) {

}
//! interface
interface Animal {
    name: string;
}

interface Animal {
    age: number;
}
interface Dog extends Animal {
    tail: boolean;
}


const dog: Dog = {
    name: 'Mdsa',
    age:10,
    tail: true
}
//! type
//* type Animal = {
//*     name: string;
//* }

// *type Dog = Animal & {
// *    tail?: boolean
// *}

// *const dog: Dog = {
// **    name: 'Dasd',
// **    tail: true
// *}
//! interface +

