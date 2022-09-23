/**
 * JSON stands for Javascript Object Notation
 * Its a lightweight data format for storing and transporting data
 * 
 * JSON is often used when data is sent from server to client.
 */


const user = {
    name: "saurav",
    age: 24, 
    car: "honda",
    address: {
        street: "Street 123",
        city: "Khunti",
        pincode: "835210",
        state: "Jharkhand"
    }
};

const jsonData = JSON.stringify(user);

console.log(jsonData);
console.log("==================================");

const objData = JSON.parse(jsonData);
console.log(objData);

console.log(objData.address.state);