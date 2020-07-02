// try not to create promises object directly.
// put them in functions and return the promise object.

/* TODO 1: Create a promise with the producer code which gets the email given 
        in the question from the server
    Mock this functionality of getting email from server using a setTimeout()
    method which returns this email after 2 seconds as the response from the server.
*/
let promiseObj = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('vatsan@example.com');
  }, 2000);
});
// TODO 2: Inside the producer code, invoke the resolve()
//callback while passing in the email given in the question as the argument

console.log(promiseObj);

// Calling reject after resolve, Then reject will not work
/* TODO 1: Create a promise with the producer code which gets the
    email given in the question from the server
    Mock this functionality of getting email from server using a setTimeout()
    method which returns this email after 2 seconds as the response from the server.
*/
let promiseObj = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('vatsan@example.com');
    reject(new Error('Could not get email from server!'));
  }, 2000);
});
// TODO 2: Inside the producer code, invoke the reject() callback while passing in the plain string
//'Could not get email from server!' as the argument without creating any Error object
