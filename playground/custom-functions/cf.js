function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
        console.log(billAmount, taxRate);
        // this is the function body
        console.log('Running Calculate Bill');
        const total = billAmount + billAmount * taxRate + billAmount * tipRate;
        return total;
}
// Function call *Run*
const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal = calculateBill(wesTotal, wesTaxRate);
// const myTotal2 = calculateBill(200, 0.13);

console.log(myTotal);

// to capture variable =>

// console.log(`Your Total is $${myTotal}`);

// console.log(`Your Total is $${calculateBill()}`);

function sayHiTo(firstName) {
        return `Hello ${firstName}`;
}

// const greeting = sayHiTo('Wes');
// console.log(greeting);

function doctorize(name) {
        return `DR.${name}`;
}

function yell(name = 'Seyoung Kim') {
        return `HEY ${name.toUpperCase()}`;
}
