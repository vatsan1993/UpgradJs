/* TODO: Convert the given callback chain into promises and rewrite all the code accordingly
NOTES: A. All the identifiers should remain constant.
B. The entire logic should remain as it is.
C. You just need to convert the callback chain into promise.
*/

const getUsername = new Promise((resolve, reject) => {
  console.log('Getting username...');
  // code to get the username
  setTimeout(() => {
    const username = 'srishti';

    resolve('Username = ' + username);
  }, 3000);
});

const validateUsername = (username) => {
  return new Promise((resolve, reject) => {
    console.log('Validating username...');
    // if the username is not undefined or null or empty string, call the getPassword() function
    if (username !== undefined && username !== null && username !== '') {
      resolve('Valid Username!');
    } else {
      reject('Invalid Username! Please try again!');
    }
  });
};

/**
 * Function to get the password from the database
 * @param {*} callback function to be called after getting the password (validatePassword() function)
 */
const getPassword = () => {
  console.log('Getting password...');
  // code to get the password
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const password = 'upgrad';

      resolve('Password = ' + password);
    }, 3000);
  });
};

/**
 * Function to validate the password
 * @param {*} password the password which is to be checked as valid or invalid
 * @param {*} callback function to be called if the password is valid
 */
const validatePassword = (password) => {
  return new Promise((resolve, reject) => {
    console.log('Validating password...');
    // if the password is not undefined or null or empty string, call the done() function
    if (password !== undefined || password !== null || password !== '') {
      resolve('Valid Password!');
    } else {
      resolve('Invalid Password! Please try again!');
    }
  });
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
  getUsername
    .then(
      (username) => {
        console.log(username);
        return validateUsername(username);
      },
      (err) => {
        console.log(err);
      }
    )
    .then(
      (validation) => {
        console.log(validation);
        return getPassword();
      },
      (err) => {
        console.log(err);
      }
    )
    .then(
      (password) => {
        console.log(password);
        return validatePassword(password);
      },
      (err) => {
        console.log(err);
      }
    )
    .then(
      (validation) => {
        console.log(validation);
        done();
      },
      (err) => {
        console.log(err);
      }
    );
};
login();
