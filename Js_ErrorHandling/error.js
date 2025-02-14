let a = prompt("Enter first number")
let b = prompt("Enter second number")

// let sum = a+b; //it will concatinate a&b 
// to convert into string we use parseInt() fun

// if user enter something else rather than num then we can throw error

// throwing error
if(isNaN(a) || isNaN(b)){
    // throw SyntaxError("Sorry, this is not allowed!")
    throw TypeError("Sorry, this is not allowed!")
}
let sum = parseInt(a) + parseInt(b)
// console.log("Sum is", sum);


// handling error
// try {
//     console.log("Sum is", sum*x);
// } catch (error) {
//     console.log("error aa gaya uiiiiii")
//     // console.log(error.name);
//     // console.log(error.message);
//     // console.log(error.stack);
// }

// finally - for functions when fun reutrn val

function main(){
    let x = 1
try {
    console.log("Sum is", sum*x);
    return true
} catch (error) {
    console.log("error aa gaya uiiiiii")
    return false;
}
finally{
    console.log("files are being close and db connection is being closed")
}
}
main()