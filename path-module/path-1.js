/**
 * 1. What is path module and what does it do?
 * 2. How to check the directory/folder name with path module?
 * 3. how to check the extension name of the file?
 * 4. How to check the base name of the file?
 * 5. How to get the root name, folder name, base, extension of a file using only 
 * one function?
 */

const path = require('path');

// const folderName = path.dirname("/Users/jumbotail/Documents/newton-school/nodejs-class/path-module/path-1.js");
// console.log(`folder name is: ${folderName}`);

// const extName = path.extname("/Users/jumbotail/Documents/newton-school/nodejs-class/path-module/path-1.js");
// console.log(`extension of file is: ${extName}`);

// const filebasename = path.basename("/Users/jumbotail/Documents/newton-school/nodejs-class/path-module/path-1.js", '.js');
// console.log(`Base name of file is: ${filebasename}`);

const fileDetails = path.parse("/Users/jumbotail/Documents/newton-school/nodejs-class/path-module/path-1.js", '.js');

console.log(fileDetails.ext);


// fileDetails: 
//     "root":"/",
//     "dir":"/Users/jumbotail/Documents/newton-school/nodejs-class/path-module","base":"path-1.js",
//     "ext":".js",
//     "name":"path-1"
// }