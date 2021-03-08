const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
        });
    }

    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data);
        });
    }

    if (req.url === '/api/users') {
        const users = [
            { name: 'Bob Smith', age: 40 },
            { name: 'John Doe', age: 30 },
        ]
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(users));
    }

    //build file path (dynamic file path)
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    const extname = path.extname(filePath);

    //set initial content type
    let contentType = 'text/html';

    //check the type of content
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.html':
            contentType = 'text/html';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
                    res.writeHead(200, { 'content-Type': 'text/html' });
                    res.end(data, 'utf8');
                })
            } else {
                res.writeHead(500);
                res.end(`server error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'content-Type': contentType });
            res.end(data, 'utf8');
        }

    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));