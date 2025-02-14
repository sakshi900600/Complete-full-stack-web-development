// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a Js function that takes an array of student names and assigns them to one of the four houser (Gryfindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length geater than or equal to 12)) based on the length of their names.


let students = ["shubh", "anjali", "Shivani", "Shivangi", "Annapurna", "Subham", "Krishnaendu", "Ravindrenathan","Shivesh", "kaif", "Emanuel"]

let house = []

for (const student of students) {
    if(student.length < 6){
        house.push("Gryfindor");
    }
    else if(student.length < 8){
        house.push("Hufflepuff");
    }
    else if(student.length < 12){
        house.push("Ravenclaw");
    }
    else{
        house.push("Slytherin");
    }
}

console.log(house);