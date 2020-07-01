/* TODO: Convert the given callback chain into promises and rewrite all the code accordingly
NOTES: A. All the identifiers should remain constant.
B. The entire logic should remain as it is.
C. You just need to convert the callback chain into promise.
*/

/**
 * Function to get the username from the database
 * @param {*} callback function to be called after getting the username (validateUsername() function)
 */
const getUsername = (callback) => {
  console.log('Getting username...');
  // code to get the username
  setTimeout(() => {
    const username = 'srishti';
    console.log('Username = ' + username);
    callback(username);
  }, 3000);
};

/**
 * Function to validate the username
 * @param {*} username the username which is to be checked as valid or invalid
 * @param {*} callback function to be called if the username is valid
 */
const validateUsername = (username, callback) => {
  console.log('Validating username...');
  // if the username is not undefined or null or empty string, call the getPassword() function
  if (username !== undefined && username !== null && username !== '') {
    console.log('Valid Username!');
    callback();
  } else {
    console.log('Invalid Username! Please try again!');
  }
};

/**
 * Function to get the password from the database
 * @param {*} callback function to be called after getting the password (validatePassword() function)
 */
const getPassword = (callback) => {
  console.log('Getting password...');
  // code to get the password
  setTimeout(() => {
    const password = 'upgrad';
    console.log('Password = ' + password);
    callback(password);
  }, 3000);
};

/**
 * Function to validate the password
 * @param {*} password the password which is to be checked as valid or invalid
 * @param {*} callback function to be called if the password is valid
 */
const validatePassword = (password, callback) => {
  console.log('Validating password...');
  // if the password is not undefined or null or empty string, call the done() function
  if (password !== undefined || password !== null || password !== '') {
    console.log('Valid Password!');
    callback();
  } else {
    console.log('Invalid Password! Please try again!');
  }
};

/**
 * Function which is called when both the username as well as password are valid
 */
const done = () => {
  console.log('BOTH VALID');
};

/**
 * Function for logging into a website
 * CALLBACK HELL
 */
const login = () => {
  getUsername((username) => {
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
