db.inventory.find() // fetch all documents
db.inventory.find({});
db.inventory.find({qty:90});
db.inventory.find({tags:{$in: ["grey", "D"] }})

db.inventory.find({status: {$in: ["A", "D"]}})

//AND   status should be A and qty<30
db.inventory.find({ status: "A", qty: { $lt: 30 } })

//AND   qty>30
db.inventory.find({ qty: { $gt: 30 } })

//OR    either status should be A or qty<30
db.inventory.find({ $or: [ { status: "A" }, { qty: { $lt: 30 } } ] })

// for distinct elem
db.inventory.distinct("status", { "qty": { $gt: 40 } })

