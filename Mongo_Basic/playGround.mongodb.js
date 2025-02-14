

// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "java",
      "price": "1230",
      "instructor": "Sakshi"
    },
    {
      "name": "python",
      "price": "1500",
      "instructor": "John"
    },
    {
      "name": "javascript",
      "price": "1000",
      "instructor": "Emily"
    },
    {
      "name": "c++",
      "price": "1350",
      "instructor": "Alex"
    },
    {
      "name": "ruby",
      "price": "1100",
      "instructor": "Sophia"
    }
  ]
  );


// Print a message to the output window.
console.log("Done inserting data");


