const prompt = require('prompt-sync')({sigint: true});

let number = prompt('Please enter a number. ');

while (number < 100) {
    number = number * 2
    console.log(number);

     if(number >= 100) {
        console.log()
     }
}