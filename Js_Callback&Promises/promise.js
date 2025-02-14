console.log('This is promises');

// creating promise
let prom1 = new Promise((resolve, reject)=>{
    let rand = Math.random();
    if(rand<0.5){ //50% time 
        reject("No random number supporting")
    }
    else{
    setTimeout(() => {
        console.log("Promisse is accepted")
        resolve("sakshi")
    }, 3000);
}
})

// to run promise
// prom1.then((a)=>{
//     console.log(a);
// }).catch((err)=>{   // caughting error/reject
//     console.log(err);
// })

let prom2 = new Promise((resolve, reject)=>{
    let rand = Math.random();
    if(rand<0.5){ //50% time 
        reject("No random number supporting 2")
    }
    else{
    setTimeout(() => {
        console.log("Promisse is accepted 2")
        resolve("sakshi 2")
    }, 2000);
}
})

// all,allSettled, race,any, resolve, reject

// let p3 = Promise.all([prom1, prom2]);
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err); 
// })

let p3 = Promise.allSettled([prom1, prom2]);
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err); 
})