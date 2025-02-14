// override karne ke liye super keyword ka use karte hai in constructor


let obj = {
    a: 1,
    b: "sakshi"
}
// console.log(obj)

// let Animal = {
//     eats: true
// }

// let Rabbit = {
//     jumps: true
// }
// Rabbit._proto_ = Animal //sets rabbit.[[Prototype]]=animal

class animal{
    constructor(name){
        this.name = name
        console.log("constructor is created..")
    }
    eats(){
        console.log("kha raha hu");   
    }
    jumps(){
        console.log("khood raha hu")
    }
}

// use extends keyword to inherit 
class lion extends animal{
    constructor(name){
        super(name) //automatically call name-shera
        console.log("constructor is created of lion ..")
    }
    // method overriding
    eats(){
        super.eats() //to run animal class eats
        console.log("kha raha hu and roar");   
    }
}

let a = new animal("Bunny");
// console.log(a)
// console.log(a.jumps())
// console.log(a.name())

let l = new lion("Shera")
// console.log(l)

console.log(l instanceof lion)
console.log(l instanceof animal)
console.log(a instanceof lion)

