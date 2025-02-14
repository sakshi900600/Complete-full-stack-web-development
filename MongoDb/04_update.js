db.inventory.findOne(
    {item:"paper"}
)

db.inventory.updateOne(
    {item:'paper'},
    
    {
        $set: { 'size.uom': 'cm', status: 'P' },
        $currentDate: { lastModified: true }
      }
)



db.inventory.find(
    {qty: {$lt:100} }
)

db.inventory.updateMany(
    { qty: { $lt: 100 } },
    {
      $set: { 'size.uom': 'in', status: 'P' },
      $currentDate: { lastModified: true }
    }
  );

