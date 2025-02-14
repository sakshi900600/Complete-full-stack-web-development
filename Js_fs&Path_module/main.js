const fs = require("fs")
const fs = require("fs/promises")
// console.log(fs);

// creating file

console.log('starting');
// in sync mhd program will wait while file created
// fs.writeFileSync("sakshi.txt", "sakshi is a billionaire")

// it is recommended
// in async next line will be executed and when writefile is done it will execute after
fs.writeFile("sakshi2.txt", "I am a billionaire", ()=>{
    console.log('done'); 
    fs.readFile("sakshi2.txt", (error,data)=>{
        console.log(error, data.toString());
    })
})

fs.appendFile("sakshi.txt"," I am the best ", (e,d)=>{
    console.log(d);
})
console.log('ending');
