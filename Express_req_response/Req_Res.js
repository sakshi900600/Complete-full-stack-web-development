const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

// chaninig of request
app.get('/', (req, res) => {
    console.log('get request');
    res.send('Hello World23!')
}).post('/', (req, res) => {
    console.log('post request');
    res.send('Hello World post!')
})

app.get('/', (req, res) => {
    console.log('put request');
    res.send('Hello World put!')
})

app.delete('/', (req, res) => {
    console.log('delete request');
    res.send('Hello World delete!')
})


// serving html file
app.get('/index', (req, res) => {
    console.log('serving index');
    // res.send('Hello World index!')
    res.sendFile("templates/index.html",{root:__dirname})
})

// serving json file
app.get('/api', (req, res) => {
    console.log('serving api');
    res.json({a:1, b:2, c:3})
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})