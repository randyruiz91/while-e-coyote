const prompt = require('prompt-sync') ({sigint: true});

const number = Number(prompt('Please enter a number. '));

let num1 = 0;
let num2 = 1;

let count = 0;

while (count < number) {
    count = count + 1;

    const num3 = num1 + num2;

    console.log(num1);

    num1 = num2;
    num2 = num3;
}

console.log('done.');