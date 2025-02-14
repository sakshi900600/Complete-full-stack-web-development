console.log("getter and setter")

class User{
    constructor(name){
        //invokes the setter
        this.name = name
    }
    get name(){
        return this._name
    }
    set name(value){
        if(value.length <4){ 
            console.log("name is too short")
            return;
        }
        //setter
        this._name = value
    }
}

let users = new User("Bunny")
console.log(users.name)
users.name = "Sakshi" //setter
console.log(users)  


