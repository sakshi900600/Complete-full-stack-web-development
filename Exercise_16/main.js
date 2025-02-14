const express = require('express')
const app = express()
const mongoose = require('mongoose');
const employee = require("./models/employee.js")
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/company');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index',{foo:"Foo"})
})

app.get('/generate', async(req, res) => {
  // generate random data
  for(let i=0; i<10; i++){
    let e =  await employee.create({
    name: "Sakshi",
    salary: 45000,
    language: "Python",
    city: "New York",
    isManager: true
    })
    // await e.save();
    console.log(e);
  }

  res.render('index',{foo:"Foo"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})