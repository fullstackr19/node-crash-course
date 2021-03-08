const fs = require('fs');
const path = require('path');

//creating directory
fs.mkdir(path.join(__dirname, './test'), {}, err => {
    if (err) throw err;
    console.log(`folder created...`)
});

//creating & writing to a file
fs.writeFile(path.join(__dirname, './test', 'hello.txt'), 'hello world!', err => {
    if (err) throw err;
    console.log(`written to the file successfully...`)
});

//appending to the existing file
fs.appendFile(path.join(__dirname, './test', 'hello.txt'), 'i love node js', err => {
    if (err) throw err;
    console.log(`file appended successfully...`)
});

//Read file 
fs.readFile(path.join(__dirname, './test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//Renaming a file 
fs.rename(path.join(__dirname, './test', 'hello.txt'), path.join(__dirname, './test', 'helloworld.txt'), (err) => {
    if (err) throw err;
    console.log(`file successfully renamed...`);
});