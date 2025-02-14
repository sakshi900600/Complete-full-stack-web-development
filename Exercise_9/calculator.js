// create a faulty calculator using javaScript

/*
This faulty calculator doed following:
1. It takes two numbers as input from the user
2. It perform wrong operations as follows:
+ -----> -
* -----> +
- -----> /
/ -----> **

it performs wrong operation 10% of the times
*/

function faultyCalculator(num1, num2, operator) {
    // generate a random number
    let random = Math.random();

    // 10% of the time perform wrong operation 10%=0.1
    if (random < 0.1) {
        // wrong operation
        switch (operator) {
            case '+':
                return num1 - num2;
            case '-':
                return num1 / num2;
            case '*':
                return num1 + num2;
            case '/':
                return num1 ** num2;
            default:
                return "Invalid operator";
        }
    }
    else {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return "Invalid operator";
        }

    }
}

let result = faultyCalculator(9,1,'*');
console.log(result);

