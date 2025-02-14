//  await ko hamesa async fun ke andar hi use karte hai
// fetch api ko do bar await karna hai
// Promise settel means resolve or reject
// resolve means promise has settle successfully
// reject means promise has not settle successfully



//  async function getData(){
//     // simulate getting data from a server
//     // we will use fetch APIs here
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

async function getData() {
    // we will use fetch APIs here
    // json placeholder src
    // let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let data = (await x).json()
    // let data = (await x).text()

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = (await x).json()
    return data
}
async function main() {
    console.log("Loading modules")
    console.log("Do something else")

    console.log('Load data');
    // await will wait until data will load then next line will execute
    let data = await getData() //it will return a promise
    console.log(data);
    console.log('process data');
    console.log('Task 2');
}

main()

// call back method
// data.then((v)=>{
// console.log(data);
// console.log('process data');

// // if we want that ki below wala fun chalta rahe
// console.log('Task 2');
// })