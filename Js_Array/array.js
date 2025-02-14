// array are mutable, type of array-object
// we can convert array to string- arr.toString() 
// join - add to array
// pop - pop last value from array and modify the array
// push - adding value at last
// shift - remove&return first value from array and modify array
// unshift - add value at first position
// unshift-push  and shift-pop




let arr = [1,2,3,45,5];

// arr[0] = 333;
// console.log(arr)
// console.log(typeof arr)
// console.log(arr.length);


// console.log(arr.toString());
// console.log(arr.join(" and "))
// console.log(arr.pop())
// console.log(arr.push(122))
// console.log(arr.push("sakshi"))
// console.log(arr.shift())
// console.log(arr.unshift("jack"))
// console.log(arr)

// delete arr[4]
// console.log(arr)
// console.log(arr.length) //size will be same


// let a1 = [1,2,3]
// let a2 = [4,5,6]
// let a3 = [9,8,7]
// console.log(a1.concat(a2,a3))
// original array will not change
// console.log(a1)
// console.log(a2)
// console.log(a3)

// console.log(a3.sort())

// splice
// let numbers = [1,2,3,4,5]
// console.log(numbers.splice(0,2))
// console.log(numbers.splice(0,2,12,34,45))  //remove 0to1 index elems and add these elems to array
// console.log(numbers)


// slice
let num = [1,2,3,4]
console.log(num.slice(2)) //from index 2 to end
console.log(num.slice(1,3)) //from index 1 to 2
