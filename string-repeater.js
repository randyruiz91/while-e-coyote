const prompt = require('prompt-sync')({sigint: true});

let str = prompt('Please enter a word. ');
let str2 = str

while(str.length < 10) {
    str = str + str2
    console.log(str);
}