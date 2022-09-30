// * UNION TYPES

let universalID: number | string = 5;
universalID='dasdasd';

function printId(id:number | string){
    if(typeof id == 'string') // * string
    console.log(id.toUpperCase());
    else console.log(id); //* number
    
    
}


function helloUser(user:string | string[]){
    if(Array.isArray(user)) // * array
        console.log(user.join(', ') + 'Hi!');
    else console.log(user + 'Hi'); //* string
    
    
}
