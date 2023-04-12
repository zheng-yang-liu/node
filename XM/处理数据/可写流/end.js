const fs = require('fs');
const { finished } = require('stream');
const ws = fs.createWriteStream('b.txt');


ws.write('hello')
ws.write('World');
ws.end('!');


ws.on('close', () => {
    console.log("close");
})
ws.on("finish",() => {
    console.log("finish");
})