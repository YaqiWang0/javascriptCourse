const fs = require('fs');


console.log('start');
const data = fs.readFileSync('./example.txt');

console.log('complete');

const data2 = fs.readFile('./example.txt', (err, data) => {
    console.log(data);
    console.log('finished')
});

console.log('start');