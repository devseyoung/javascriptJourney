// function doctorize(firstName){
//     return `Dr. ${firstName}`;
// }
// Anon Function
// function doctorize(firstName){
//     return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function(firstName) {
//         return `Dr. ${firstName}`;
// };

// fucntion inchToCM(inches){
//     return inches * 2.54;
// };

// const inchToCM = function(inches){
//     return inches * 2.54;
// };

/* eslint - disable */
const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//         const total = a + b;
//         return total;
// }
const add = (a, b = 3) => {
        a + b;
};

// returning an object
// function makeBaby(first, last) {
//         const baby = {
//                 name: `${first} ${last}`,
//                 age: 0,
//         };
//         return baby;
// }

// Arrow function
const makeBaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression
(function(age) {
        console.log('Running the Anon function');
        return `You are cool and age ${age}`;
})(10);

// Methods!!!

const wes = {
        name: 'Wes Bos',
        // Method
        sayHi() {
                console.log(`Hey ${this.name}`);
                // console.log('Hey wes');
                return 'Hey Wes';
        },
        // Short hand method
        yellHi() {
                console.log('HEY WESSSS');
        },
        // Arrow function
        wisperHi: () => {
                console.log('hii wess im a mouse');
        },
};

// Callback Functions
// Click callback
const button = document.querySelector('.clickMe');
// console.log(button);

button.addEventListener('click', wes.yellHi);

// Timer callback
setTimeout(wes.yellHi, 1000);
