show('dbs');
use('shop');

// db.products.insertOne({name: "A book",price: 12.99});
// db.products.insertOne({name: "A T-Shirt",price: 20.99});
db.products.insertOne({name: "A Computer ",price:1299, details: { cpu: "Intel i7 8770"}})
db.products.find().pretty();