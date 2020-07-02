/* TODO: Convert the given code using promises chain into code utilizing the new syntax of async & await keywords
NOTES: A. All the identifiers remain constant.
B. The entire logic remains as it is.
*/

/**
 * Function to get the username from the database
 * @param {*} callback function to be called after getting the username (validateUsername() function)
 */
const getUsername = ()=>{ return new Promise((resolve, reject) => {
    console.log("Getting username...");
    // code to get the username
    setTimeout(() => {
        const username = "srishti";
        console.log("Username = " + username);
        resolve(username);
    }, 3000);
});}


/**
 * Function to validate the username
 * @param {*} username the username which is to be checked as valid or invalid
 * @param {*} callback function to be called if the username is valid
 */
const validateUsername = (username) => {
    return new Promise((resolve, reject) => {
        console.log("Validating username...");
        // if the username is not undefined or null or empty string, call the getPassword() function
        if (username !== undefined && username !== null && username !== "") {
            console.log("Valid Username!");
            resolve();
        } else {
            reject("Invalid Username! Please try again!");
        }
    });
}


/**
 * Function to get the password from the database
 * @param {*} callback function to be called after getting the password (validatePassword() function)
 */
const getPassword = () => {
    return new Promise((resolve, reject) => {
        console.log("Getting password...");
        // code to get the password
        setTimeout(() => {
            const password = "upgrad";
            console.log("Password = " + password);
            resolve(password);
        }, 3000);
    });
}


/**
 * Function to validate the password
 * @param {*} password the password which is to be checked as valid or invalid
 * @param {*} callback function to be called if the password is valid
 */
const validatePassword = (password) => {
    return new Promise((resolve, reject) => {
        console.log("Validating password...");
        // if the password is not undefined or null or empty string, call the done() function
        if (password !== undefined || password !== null || password !== "") {
            console.log("Valid Password!");
            resolve();
        } else {
            reject("Invalid Password! Please try again!");
        }
    });
}


/**
 * Function which is called when both the username as well as password are valid
 */
const done = () => {
    console.log("BOTH VALID");
};


/**
 * Function for logging into a website
 */
const login = async () => {
    try{
       let username= await getUsername();
       let validation1= await validateUsername(username);
       let password= await getPassword();
       let validation2= await validatePassword(password);
       done();
    }
    catch(err){
        console.log(err);
    }
};

login();