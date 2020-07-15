// const chalk = require('chalk');
// console.log(chalk.blueBright('bye'));
// console.log(chalk.red.underline('Something went wrong!'));
// console.log(chalk.bgYellow('Check your code again'));

// const error_occured = chalk.red.underline;
// const success = chalk.greenBright;
// console.log(error_occured('Another error occurred'));
// console.log(success('Everything is fine'));

const chalk = require('chalk');
const log = console.log;
const error = chalk.yellow.bgRed;
log(error('Address not found'));
