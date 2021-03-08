const http = require('http');

//Create Server object
http.createServer((req, res) => {
    res.write('hello world');
    res.end();
}).listen(5000, console.log('Server running...'));