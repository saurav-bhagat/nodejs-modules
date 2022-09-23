const http = require('http');

const server = http.createServer((request, response) => {

    switch(request.url) {
        case "/":
            response.end("Hello world from base route");
            break;
        case "/about":
            response.writeHead(201);
            response.end("Hello from about route or page");
            break;
        case "/contact":
            response.end("Hello from contact us page");
            break;
        default:
            response.writeHead(404);
            response.end("404, Page Not Found");
    }
});

server.listen(3000, () => {
    console.log(`Server is listening at port 3000`);
});
