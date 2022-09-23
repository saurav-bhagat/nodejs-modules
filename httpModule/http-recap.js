const http = require('http');

const server = http.createServer((request, response) => {
    switch(request.url){
        case "/":
            response.end("Hello world from home page");
            break;
        case "/about":
            response.end("Hello world from About page");
            break;
        case "/contact":
            response.end("Hello world from contact page");
            break;
    }
    
});


server.listen(4000, () => {
    console.log(`Server is listening at port 4000`);
});