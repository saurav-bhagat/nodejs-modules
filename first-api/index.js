const http = require('http');
const fs = require('fs');

// API - Application programming Interface
// API is a langauge through which software or computer communicates


const server = http.createServer((request, response) => {

    // fs.readFile(`${__dirname}/userData.json`, "utf-8" ,(error, data) => {
    //     if(error) response.end("Something wrong here");
    //     if(data) response.end(data);
    // });

    if(request.url.includes('/user/')){
        let username = request.url.split('/')[2];

        fs.readFile(`${__dirname}/userData.json`, "utf-8" ,(error, data) => {
            if(data) {
                let formattedData = JSON.parse(data);
                let userData = formattedData.filter((singleData) => singleData.username == username);
                if(userData.length < 1){
                    response.writeHead(404);
                    response.end("User not present");
                }
                response.writeHead(200);
                response.end(JSON.stringify(userData));
            }
        });
    }
});

server.listen(4000, () => {
    console.log(`server is listening at port ${4000}`);
});
