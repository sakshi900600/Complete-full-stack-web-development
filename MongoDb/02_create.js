// for inserting one date in collection
db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
 )

 //for inserting many data in collection
 db.inventory.insertMany([
    { item: "canvas1", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas2", qty: 80, tags: ["gold"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas3", qty: 50, tags: ["copper"], size: { h: 28, w: 35.5, uom: "cm" } },
    { item: "canvas4", qty: 90, tags: ["iron"], size: { h: 28, w: 35.5, uom: "cm" } }
 ])

 