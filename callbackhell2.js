/*
TODO 1: 
A. Define a function with identifier getUsername
B. Inside this function, print the message "Getting username..." to the console
C. Write a setTimeout() function with a delay of 3 seconds to mock getting the username from the user
(you need to assign value 'srishti' to the username inside the setTimeout() function)
D. Print the username to the console, as shown in the Problem Statement
E. Call the callback function validateUsername() while passing in the username as the argument to it
*/
let getUsername = (callback) => {
  console.log('Getting username...');

  setTimeout(() => {
    let username = 'srishti';
    console.log('Username = ' + username);
    callback(username);
  }, 3000);
};

/*
  TODO 2: 
  A. Define a function with identifier validateUsername
  B. Inside this function, print the message "Validating username..." to the console
  C. Validate the username passed to this function as the argument
  (A username is VALID when it is not undefined and null and an empty string)
  D. If the username is valid, print the message "Valid Username!" on the console and call the callback function passed in the argument
  E. If the username is not valid, print the message "Invalid Username! Please try again!"
  */
let validateUsername = (username, callback) => {
  console.log('Validating username...');
  if (username !== undefined && username !== '') {
    console.log('Valid Username!');
    callback();
  } else {
    console.log('Invalid Username! Please try again!');
  }
};

/*
  
  
  TODO 3: 
  A. Define a function with identifier getPassword
  B. Inside this function, print the message "Getting password..." to the console
  C. Write a setTimeout() function with a delay of 3 seconds to mock getting the password from user
  (you need to assign value 'upgrad' to the password inside the setTimeout() function)
  D. Print the password to the console, as shown in the Problem Statement
  E. Call the callback function validatePassword() while passing in the password as the argument to it
  */
let getPassword = (callback) => {
  console.log('Getting password...');
  setTimeout(() => {
    let password = 'upgrad';
    console.log('Password = ' + password);
    callback(password);
  }, 3000);
};

/*
  TODO 4: 
  A. Define a function with identifier validatePassword
  B. Inside this function, print the message "Validating password..." to the console
  C. Validate the password passed to this function as the argument
  (A password is VALID when it is not undefined and null and an empty string)
  D. If the password is valid, print the message "Valid Password!" on the console and call the callback function passed in the argument
  E. If the password is not valid, print the message "Invalid Password! Please try again!"
  */
let validatePassword = (password, callback) => {
  console.log('Validating password...');
  if (password !== undefined && password !== null && password !== '') {
    console.log('Valid Password!');
    callback();
  }
};

/*
  TODO 5: Define a function with identifier done which logs the message "BOTH VALID!" on the console
  */
let done = () => {
  console.log('BOTH VALID!');
};

/*
  TODO 6: 
  A. Define a function with identifier login
  B. Inside the login() function, call the getUsername() function
  C. Pass validateUsername() function with username argument as the callback function inside the getUsername() function
  D. Pass getPassword() function as the callback function inside the validateUsername() function
  E. Pass the validatePassword() function with password argument as the callback function inside the getPassword() function
  F. Pass the done() function as the callback function inside the validatePassword() function
  */

let login = () => {
  getUsername((username) => {
    // Sending empty function as call back as validateUsername does not get a value or generates anything.
    validateUsername(username, () => {
      getPassword((password) => {
        validatePassword(password, () => {
          done();
        });
      });
    });
  });
};

login();
