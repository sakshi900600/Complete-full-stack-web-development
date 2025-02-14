/* create a business name generator by combining list of adjectives and shop name and another word 

Adjectives: don't use array
Crazy, Amazing, Fire 

shop name;
Engine, Foods, Garments

Another Word:
Bros, Limited, Hub

*/


let rand = Math.random;
let first,second,third;

// 0 0.33(1/3) 0.66(2/3) 1

// generate first word
if(rand <0.33){
    first = "Crazy"
}
else if(rand >=0.33 && rand<0.66){
    first = "Amazing"
}
else{
    first = "Fire"
}

// generate second word
if(rand <0.33){
    second = "Engine"
}
else if(rand >=0.33 && rand<0.66){
    second = "Foods"
}
else{
    second = "Garments"
}

// generate third word
if(rand <0.33){
    third = "Bros"
}
else if(rand >=0.33 && rand<0.66){
    third = "Limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)