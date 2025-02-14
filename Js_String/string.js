console.log("This is js string")
let a = "Sakshi"
console.log(a);
console.log(a[0]);
console.log(a[2]);
// console.log(a[6]); //undefined

console.log(a.length)

let real_name = "sakshi";
let friend = "priya";
console.log("My name is "+real_name+ " and my friend is "+friend)

// template literal
console.log(`My name is ${real_name} and my friend is ${friend}`)

let b = "Billionaire"
console.log(b.toLowerCase())
console.log(b.toUpperCase())
console.log(b.length)

// slicing
console.log(b.slice(1,3)) //om
console.log(b.slice(1))  //ommy

// replace
console.log(b.replace("Bi","Tri"))
console.log(b.concat(a))
console.log(b.concat(a, " The Richest person of India"))

// removing whitespace
let name = "  sakshi  "
let new_name = name.trim()
console.log(name)
console.log(new_name)

// string are immutable- can't change string instead u can create new string

// startswith, endswith