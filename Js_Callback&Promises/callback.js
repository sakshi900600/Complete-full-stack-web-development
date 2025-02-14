console.log("I am a hacker")
console.log("He is a pro gamer")

// setTimeout(() => {
//     console.log("asyn feature of js 1")
// }, 2000);

// setTimeout(() => {
//     console.log("asyn feature of js 2")
// }, 0);

// console.log("The End")


const fn = ()=>{
    console.log("billionaire")
}

const callback = (arg, fn)=>{
    console.log(arg)
    fn();
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script")
  sc.src = src;
//   callback- fun ke andar fun
  sc.onload = callback("sakshi",fn)
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)