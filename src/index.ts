// call signature 

type signature = { // type of a function
    property: string,
    value: number,
    extras?: number,
    (str: string): void,
}

function sample(str: string){
    console.log(str);
}

sample.property = "hello i am a sample function";
sample.value = 100;

function TakesArg(fn: signature){
    console.log(fn.property);
    fn("so i am a sample function!")
}

TakesArg(sample);

// Generics

interface hasLength{
    length: number,
    name?: string,
}

function doIt<T extends {length: number}> (a: T, b: T): boolean{
    return a.length > b.length;
}

const obj1: hasLength = {
    length : 10
}
const obj2: hasLength = {
    length : 20
}

console.log(doIt(obj1, obj2));

function join<T> (ar1: T[], ar2: T[]): T[]{
    return ar1.concat(ar2);
} 

const ar = join<string | number>([1,2,3], ["hello"]);

const greeting = "hello";
const bruh = "googd";