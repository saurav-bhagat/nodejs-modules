// what is npm? - node package manager
// how to initialize npm?
// what does node_modules folder do?
// Lets use chalk package
// Make the terminal colorful using chalk package
// use validator npm package

import chalk from "chalk";
import validator from "validator";

// console.log(chalk.blue("hello world"));
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// console.log(chalk.blue.bgRed.bold('Hello world!'));

// console.log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
// 	' that becomes green again!'
// ));

// console.log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// console.log(validator.isEmail('foo@bar.com'));

// console.log(validator.isMobilePhone('7654332334', 'en-IN'));

const isValidEmail = validator.isEmail('foo@bar.com');
isValidEmail ? console.log(chalk.blue('Email is valid')) : console.log(chalk.red('Invalid Email'));