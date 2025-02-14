const express = require('express')
const app = express()
const port = 3000

// suppose hamne do var database se fetch kiya aur ab hame isse index.html me dalna hai

// link to learn more about ejs - https://github.com/mde/ejs/wiki/Using-EJS-with-Express


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send('Hello World!')

  let siteName = "Adidas"
  let searchText = "Search Now"
  let arr = ["Hey",54,65]
  res.render("index", {siteName: siteName, searchText: searchText, arr})
})

app.get('/blog/:slug', (req, res) => {

  let blogtitle = "Adidas when and why? "
  let blogContent = "It's a famous brand "
  res.render("index", {blogtitle: blogtitle, blogContent: blogContent})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})