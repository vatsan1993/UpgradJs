/* TODO 1: Create a promise with the producer code which 
    gets the email given in the question from the server
    Mock this functionality of getting
    email from server using a setTimeout() method which returns this email after 2 seconds as the response from the server.
*/
let getemail = new Promise((resolve, reject) => {
  console.log('Getting email from server...');
  setTimeout(() => {
    resolve('Email = srishti.gupta@upgrad.com');
  }, 2000);
});

// TODO 2: Inside the producer code, invoke the resolve()
// callback while passing in the given email id in the question as the argument

// TODO 3: Define an async function which has the try and catch blocks
let handleUserName = async () => {
  try {
    let email = await getemail;
    console.log(email);
  } catch (err) {
    console.log(err);
  }
};

handleUserName();
// TODO 4: Inside the try block, wait for the promise defined above using the await keyword and hold the email returned by the promise in a variable and print the value inside this variable on the console in the format given in the question

// TODO 5: Inside the catch block, log on to console the error(s) received, if any (this won't be true for the current case since we are resolving the promise)

// TODO 6: Invoke the async function defined earlier
