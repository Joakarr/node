// let a = [1, 2 , 'Hello', 7, 8, 9];
// console.log(a.length);
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

const http = require('http');

// http.createServer().listen(3000);
http.createServer(function (request, response) {
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers['user-agent']);

    response.setHeader("Content-Type", "text/html; charset=utf-8;")

    if (request.url == '/') {
        response.end('Main <b> HELLO </b>');
    }
    else if (request.url == '/cat') {
        response.end('Category');
    }
}).listen(3000);