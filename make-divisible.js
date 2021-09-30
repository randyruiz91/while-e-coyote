const prompt = require('prompt-sync') ({sigint: true});

let x = prompt('Please enter a number. ');
let y = prompt('Please enter a number. ');

while (x % y !=0) {
    x++
console.log(x);
}

console.log(x, 'is divisible by', y);