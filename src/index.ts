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
