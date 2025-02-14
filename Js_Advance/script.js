// IIFE - immediately invoked funciton expression
// destructuring - used to unpack val from array
// spread operator- ... 
// Hoisting - if u declare any variable using var and u call it before decleration it will return undefined and if u use let it will return error


async function sleep(){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(34)
    }, 1000);
    })
}
// let a = await sleep()  //it will not work

// function sum(a,b,c){
//     return a+b+c;
// }


// IIFE
(async function main(){
    // let b = await sleep()
    // console.log(b);

    // destructuring
    // let [x,y, ...rest] = [3,4,7,8,9,11] //x=3,y=4 so u can assign rest val to a variable using destructuring
    // console.log(x,y,rest);


    // sometimes u need few val out of multiple so u can find out like this
    let obj = {
        a:1,
        b:2,
        c:3
    }
    let {a,b} = obj;
    // console.log(a,b);

    let arr = [1,4,6]
    // console.log(sum(arr[0],arr[1],arr[2]));
    // console.log(sum(...arr)); //...arr- spread operator

    // console.log(a1);
    // var a1 = 5
    // let a1 = 5

})()

// quiz
const a = "the", b="no"
const c = {a,b}
// console.log(c);