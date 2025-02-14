const express = require('express')
const app = express()
const port = 3000

// serve static files
app.use(express.static('public'))


// app.get or app.post or app.put or app.delete(path,handler) 
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Hello contact me')
})

app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})

// app.get('/blog/intro-to-js', (req, res) => {
// logic to fetch intro-to-js from db
//     res.send('Hello js!')
// })

// app.get('/blog/intro-to-py', (req, res) => {
// logic to fetch intro-to-py from db
//     res.send('Hello python!')
// })

// instead we can do this
app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // for this URL - http://127.0.0.1:3000/blog/intro-to-sakshiTheBilliionaire?mode=dark&region=in
    console.log(res.params); //will output { slug: 'intro-to-sakshiTheBilliionaire' }
    console.log(res.query); //will output { mode: 'dark', region: 'in' }
    res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})