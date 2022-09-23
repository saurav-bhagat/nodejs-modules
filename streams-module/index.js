/**
 * Streams are object that let you read data from a source or 
 * write data to a destination in a continous fashion. 
 * 
 * Streaming means listening to music or watching video in real time, 
 * instead of downloading the file to our computer and watching it later. 
 * 
 * In node.js there are 4 types of streams:
 * 
 * 1. Readble  - Stream which is used for Read operation
 * 2. Writable - Stream which is used for Write operation
 * 3. Duplex   - Stream which is used for both Read and Write operation
 * 4. Transform - A type of Duplex stream where the output is computed based on the input.
 * 
 * 
 * Each type of stream is an EventEmitter instance/object and throws several events at 
 * different instances of time. 
 * 
 * 1. data - This event is fired when there is data available to read
 * 2. end  - This event is fired when there is no more data to read
 * 3. error - This event is fired when there is error receiving or writing data
 * 4. finish - Fired when all the data has been flushed to underlying system.
 * 
 */

const fs = require('fs');
const http = require('http');

const server  = http.createServer();

server.on('request', (req, res) => {

    const rStream = fs.createReadStream('input.txt');


    rStream.on('data', (chunkData) => {
        res.write(chunkData); 
    });
    
    rStream.on('error', () => {
        res.end();
    });
    
    rStream.on('end', () => {
        res.end();
    });
    
});

// create readable stream
// listen for data, erorr, end



server.listen(4000, () => {
    console.log("listening to port 4000");
});
