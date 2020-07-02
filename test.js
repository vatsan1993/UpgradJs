// // const prompt = require('prompt-sync')();
// var number = parseInt(prompt('Please enter a number: '));

// var sum = 0;
// while (number > 0) {
//   var digit = number % 10;
//   sum += digit;
//   number = Math.round(number / 10);
// }
// console.log(sum);

// var orderId = null;

// var placeOrder = (callback) => {
//   console.log('Placing order...');
//   setTimeout(function () {
//     orderId = '101';
//     callback(orderId);
//   }, 2000);
// };

// var printOrderID = function (orderId) {
//   console.log('Order ID = ' + orderId);
// };

// placeOrder(printOrderID());

// Example 1
// var loadImage1 = new Promise(function (resolve, reject) {
//   console.log("Example 1: Loading image...");
//   setTimeout(function () {
//       var imageUrl = "Desktop/image.png";
//       resolve();
//   }, 2000);
// });

// loadImage1.then(function () {
//   console.log("Image loaded successfully!");
// }, function (error) {
//   console.log(new Error(error));
// });

// // Example 2
// var loadImage2 = new Promise(function (resolve, reject) {
//   console.log("Example 2: Loading image...");
//   setTimeout(function () {
//       var imageUrl = "Desktop/image.png";
//       reject(new Error("Error in loading image!"));
//   }, 2000);
// });

// output:
// Example 1: Loading image...
// Example 2: Loading image...
// Image loaded successfully!
// Uncaught (in promise) Error: Error in loading image!