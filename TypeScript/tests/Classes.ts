class Coord {
    message = '1';
    lat: number;
    long: number;
    computeDistance(nlat: number, nlong: number) {
        return 0;
    }

    protected test() {
        if (this.lat > 0) {

        }
    }
    constructor(lat: number, long: number) {
        this.lat = lat;
        this.long = long;
        this.test();
    }
}

const point = new Coord(1, 23);

class MapLocation extends Coord {
    message = '2';
    private _name: string;

    get name() {
        return this._name;
    }

    set name(s: string) {
        this._name = s + '_cool';
    }

    override computeDistance(nlat: number, nlong: number) {
        console.log(this._name);
        this.test();
        return 1;
    }

    constructor(lat: number, long: number, name: string) {
        super(lat, long);
        this.test();
    }



}


const loc= new MapLocation(0,1,'dasda');
 


interface LoggerService {
    log: (s: string) => void;
}

class Logger implements LoggerService {
    public log(s: string) {
        console.log(s);
    };
    private error(s: string) {
        console.log(s);
    };
}

const l = new Logger();
l.log('d');


class MyClass {
    static a = '1';
    static {

    }
}

MyClass.a;



class MyClass2<T>{
    a:T;
}

const b2= new MyClass2<string>();
b2.a;

abstract class Base {
    print(s:string){
        console.log(s);
        
    }

    abstract error(s:string):void;
}

class BaseExt extends Base{
    error(s: string): void {
        throw new Error("Method not implemented.");
    }

}

class Animal{
    name:string;
}

class Dog{
    name:string;
    tail:boolean;
}

const puppy: Animal = new Dog();