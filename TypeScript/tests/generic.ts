interface HasLength {
    length: number;
}
function log<T extends HasLength, K>(obj: T, arr: K[]): K[] {
    obj.length;
    console.log(obj);
    return arr;
}

interface IUSer {
    name: string;
    age?: number;
    bid:<T> (sum: T) => boolean;

}

function bid<T> ( sum:T): boolean{
    return true;
}
