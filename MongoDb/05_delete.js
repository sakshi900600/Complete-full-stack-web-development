//for deleting all data
db.inventory.deleteMany({})

//for deleting one data/document
db.inventory.deleteOne( { status: "D" } )

//for deleting many document
db.inventory.deleteMany({ status : "A" })