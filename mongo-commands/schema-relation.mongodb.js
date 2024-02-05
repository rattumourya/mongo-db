show('dbs');
// use('shop');

// db.products.insertOne({name: "A book",price: 12.99});
// db.products.insertOne({name: "A T-Shirt",price: 20.99});
// db.products.insertOne({name: "A Computer ",price:1299, details: { cpu: "Intel i7 8770"}})
// db.products.find().pretty();


// ****************************** Data Types *****************************
// text , boolean , number , integer (int 32), NumberLong(int64) , NumberDecimal , ObjectId , ISODate, Timestamp
// Embedded document , Array

// drop database
// db.dropDatabase();


// new database
use('companyData');

// db.companies.insertOne({
//     name: "Fresh Apples Inc", isStartUp: true, employees: 33, funding: 12232234242345234523452345,
//     details: { ceo: "Mark Super" }, tags: [{ title: "Super" }, { title: "perfect" }],
//     foundingDate: new Date(),
//     insertedAt: new Timestamp()
// });

db.companies.find().pretty();
// db.numbers.insertOne({a: 1});
db.numbers.find().pretty();

// db.numbers.deleteMany({});
db.stats();

// db.numbers.insertOne({a: NumberInt(1)});

typeof(db.numbers.findOne().a);

