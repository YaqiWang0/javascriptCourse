// const name = 'John';
// let age = 18;
//
// function getAge() {
//     return age;
// }
//
// const myAge = () => age
//
//
//
// // console.log(getAge());
// // console.log(myAge());
//
// const arr = [1, 2, 3, 4];
//
// const arr2 = arr.map(v => {
//     return v + 1;
// });
//
// //console.log(arr2);
//
// const arr3 = arr.filter(v => {
//     return v%2;
// });
//
// //console.log(arr3);
//
// const arr4 = [5, 6];
//
// const arr5 = [...arr, ...arr3];
//
// console.log(arr5);

const http = require('http');
require('./config');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<h1>My First app</h1>>');
        res.end();
    } else if (url === '/login') {
        res.write('<h1>Login</h1>>');
        res.end();
    }


});

server.listen(process.env.PORT)

