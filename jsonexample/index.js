const fs = require('fs');

/**
 * Convert given data to json
 * Add a json file and store the data in that file
 * Read the file and convert back to object
 * Print the city in which user lives
 */

const user = {
    name: "saurav",
    age: 24, 
    car: "honda",
    address: {
        street: "Street 123",
        city: "Delhi",
        pincode: "835210",
        state: "Jharkhand"
    }
};

fs.writeFile('data.json', JSON.stringify(user), (err) => {
    console.log(err);
    console.log("Data has been written to the file");
});

fs.readFile('data.json', "utf-8", (err, data) => {
    const objData = JSON.parse(data);
    console.log(objData.address.city);
});