// CRUD OPERATION

//explore operators:  https://www.mongodb.com/docs/manual/reference/operator/query/

use("CurdDb")

// CREATE

db.createCollection("course")

// db.course.insertOne({
//     name: "full stack development by sakshi",
//     price: 5000,
//     projects: 40,
//     assignments: 12 
// })

// db.course.insertMany([
//     {
//         name: "full stack development by sakshi",
//         price: 5000,
//         projects: 40,
//         assignments: 12 
//     },
//     {
//         name: "Java with DSA",
//         price: 15000,
//         projects: 40,
//         assignments: 12 
//     },
//     {
//         name: "C++",
//         price: 5000,
//         projects: 40,
//         assignments: 12 
//     }
// ])


// READ

// let a = db.course.find({price:5000})
// console.log(a);
// console.log(a.count());
// console.log(a.toArray());

// let b = db.course.findOne({price:5000})
// console.log(b);


// UPDATE
// db.course.updateOne({price:5000}, {$set:{price:5500}})
// db.course.updateMany({price:5000}, {$set:{price:5500}})

// DELETE
// db.course.deleteOne({price:5500})
// db.course.deleteMany({price:5500})