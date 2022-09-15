const fs = require('fs');

// fs.mkdir('utils', (error) => {
//     console.log(`Error is ${error}`);
//     console.log(`utils directory has been created`);
// });

// fs.writeFile('utils/data.txt', 'This is async fs module', function (error){
//     console.log(`Error is: #${error}`);
// });

// fs.appendFile('utils/data.txt', ". Virat kohli hit century." , (error, data) => {
//     console.log("data is: ", data);
// });

// fs.readFile('utils/data.txt', function (error, data){
//     console.log(data.toString());
// });

// fs.unlink('utils/data.txt', (error, data) => {
//     console.log("File is deleted")
// });

// fs.rmdir('utils', (error) => {
// });


// if javscript engine or nodejs or v8 find any asyncronous code, 
// it stores it in some other place and continue with the execution of 
// the rest of the code.
// Once all the code is executed, only then JS picks the async wala code
// from that place.
