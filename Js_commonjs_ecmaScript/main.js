// (function(exports, require, module,__dirname,__filename){
    // module code actually lies here
// })





// in common js we use modules using require keyword 

// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// in ecma es6 we change "type": "module", in package.json file

// import {a,b,c,d} from "./mymodule.js"
// console.log(a,b,c,d);


// import sak from "./mymodule.js"
// console.log(sak);

const a = require("./mymodule2.js")
console.log(a, __dirname, __filename);
