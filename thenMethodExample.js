/* TODO 1: Create a promise with the producer code which gets the email given 
    in the question from the server
    Mock this functionality of getting email from server using a setTimeout() 
    method which returns this email after 2 seconds as the response from the server.
*/
let promiseObj = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('srishti.gupta@upgrad.com');
    reject('Error');
  }, 2000);
});

// TODO 2: Inside the producer code, invoke the resolve() callback while passing in the email given in the question as the argument

// TODO 3: Define a then() consumer method which has two arguments
//- one as the successCallbackHandler and the other as the errorCallbackHandler
promiseObj.then(
  (val) => {
    console.log('Getting email from server...');
    console.log('Email = ' + val);
  },
  (err) => {
    console.log('Error Occured: ' + err);
  }
);
// TODO 4: Print the email received as an argument in the successCallbackHandler
//of the then() method
