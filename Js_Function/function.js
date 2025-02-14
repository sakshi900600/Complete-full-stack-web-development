function nice(name) {
    console.log("hey "+ name+ " you are nice")
    console.log("hey "+ name+ " you are good")
    console.log("hey "+ name+ " you are successful")
}

// console.log("hey sakshi you are nice")
// console.log("hey sakshi you are good")
// console.log("hey sakshi you are billionaire")

// nice("goldi")
// nice("saks")

function sum(a,b,c=2) {
    // console.log(a+b) //result will not give any value that's why we use return statement
    return a+b+c;
}
// sum(8,3)
result = sum(2,3)
result2 = sum(2,3,3)
// console.log("The sum of num is: ", result)
// console.log("The sum of num is: ", result2)

const func1 = (x)=>{
    console.log("I am an arrow function", x);
}
func1(2)
func1(29)
func1(9)
