const express = require('express')
const app = express()
const port = 3000
const blog = require("./routes/blog")
const fs = require("fs")

// app.use(express.static("public"))
app.use("/blog", blog)

// Middleware 1 - logger for our application
app.use((req, res, next)=> {
    console.log('m1')
    console.log(req.headers);
    req.sakshi = "I am sakshi"

    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)

    // res.send("Hacked by middleware 1")  //it wil give error coz here u send req then u can't give control to next
    next() //request ka control agle middleware ko do
})

// Middleware 2
// app.use((req, res, next)=> {
//     console.log('m2')
//     next()
// })


app.get('/', (req, res) => {
//   res.send('Hello World!'+ req.sakshi)
  res.send('Hello World!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})