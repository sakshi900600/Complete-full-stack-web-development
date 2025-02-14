let a = 6

// using for loop

function facFor(number) {
    let fact = 1;
    for (let index = 1; index <= number; index++) {
        fact = fact * index;
    }
    return fact;
}


// reduce method

function factorial(number) {
    // fun below is used to create an array
    let arr = Array.from(Array(number + 1).keys());

    // using reduce
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b;
    })
    return c;
}

console.log(facFor(a))
console.log(factorial(a))

