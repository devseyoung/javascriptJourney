/* eslint-disable */

const name = 'wes'; 
const middle = "topher";
const last = `bos`;

// // foward slash
// const setence = 'she\'s so cool\\';

// // back ticks
// const setence2 = `she's so "cool"`;

// const hello = "Hello my name is " + name + ". Nice to meet you.";

const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old `;
const age = 100.5;  // type of int

const a = 10;
const b = 20;

// Math.round()
// Math.floor()
// Math.random()

const smarties = 20;
const kids = 3; 
const eachKidGets = Math.floor(smarties / kids);

console.log(`Each kids get ${eachKidGets}`);

// Object => properties
// person.age => 100 (the easiest way to get properties in objects)
const person = {
    first : 'wes',
    last : 'bos',
    age : 100
};

// undefined
let dog;
console.log(dog);

// booleans => 'if' statements
// == (bad practice because it is not checking types of data) , === (good one)

let isDrawing = false;
const age = 18;
const ofAge = age > 10;
console.log(ofAge);

// Math.max(10, 12); => 12 (highest number)
// the data in () pass one argument 
