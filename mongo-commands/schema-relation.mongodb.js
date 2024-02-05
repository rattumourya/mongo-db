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

// ***************** One to One Relation - Embedded ***********************
// Patient A  < - > Summary A
// Patient B  < - > Summary B
// Patient C  < - > Summary C

use("hospital");
// db.patients.insertOne({name: "Max",age: 29, diseaseSummary: "summary-max-1"});
db.patients.find().pretty();
// db.diseaseSummaries.insertOne({_id:"summary-max-1",diseases: ["Cold","Broken leg"]});
// db.diseaseSummaries.deleteMany({});
db.diseaseSummaries.find().pretty();

// get a patients diseases summaries
db.patients.findOne({name:"Max"});
var dsid  = db.patients.findOne({name: "Max"}).diseaseSummary;
db.diseaseSummaries.findOne({_id: dsid});


// ************************* One to One  - Using Reference ***********************
show("dbs");
use("cardData");
// db.persons.insertOne({name:"Max",car:{model:"BMW",price:4000}});
// db.persons.deleteMany({});
// db.persons.insertOne({name: "Max",age: 29,salary:3000});
db.persons.find().pretty();
db.cars.insertOne({model:"BMW",price:4000,owner:ObjectId('65c0ef0c9c0851571f56760a')});
db.cars.find().pretty();


