// slug - string in url

var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a);

// if you prefer something other than '-' as separator
let b = slugify('some &J*$@#string', '_')  // some_string
console.log(b);
