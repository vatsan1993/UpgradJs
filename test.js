// const prompt = require('prompt-sync')();
var number = parseInt(prompt('Please enter a number: '));

var sum = 0;
while (number > 0) {
  var digit = number % 10;
  sum += digit;
  number = Math.round(number / 10);
}
console.log(sum);
