// inserting database
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])

 
 db.inventory.find().sort({qty:1})  //sorting in ascending order
 db.inventory.find().sort({qty:-1})  //sorting in descending order

 db.inventory.find().skip(2)  // skips first two documents in output
 db.inventory.find().limit(2) // limits the number of documents in output to 2

// Achieving pagination using MongoDB find and limit
1 to 10
n = 8
db.blog.find().skip((pageNo -1)*no).limit(no)
db.blog.find().skip((0)).limit(8)  pageNo = 1
db.blog.find().skip((8)).limit(8)  pageNo = 2

