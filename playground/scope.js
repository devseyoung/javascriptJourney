/* eslint-disable */

// const age = 100;

// function go(){
//     const myAge = 200;
//     const hair = 'blonde';
//     console.log(age);
//     console.log(myAge);
//     console.log(hair);
// }

// go();
// function isCool(name){
//     let cool;
//     if(name === 'kim'){
//         cool = true;
//     }
//     console.log(cool);
//     return cool;
// }


// it still logged snickers (Lexically scope => it cares where it's defined)
// try not to create global variables
const dog = 'snickers';
// window.IAmAGlobal = 'Kim';

function logDog(dog){
    console.log(dog);
}

function go (){
    const dog = 'sunny';
    logDog('Kim');
}

go();

function yell(){
    console.log(name.toUpperCase());
}

function sayHi(name){
    yell();
}

yell();

