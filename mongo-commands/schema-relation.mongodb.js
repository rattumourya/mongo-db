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

// typeof(db.numbers.findOne().a);

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
// var dsid  = db.patients.findOne({name: "Max"}).diseaseSummary;
// db.diseaseSummaries.findOne({_id: dsid});


// ************************* One to One  - Using Reference ***********************
show("dbs");
use("cardData");
// db.persons.insertOne({name:"Max",car:{model:"BMW",price:4000}});
// db.persons.deleteMany({});
// db.persons.insertOne({name: "Max",age: 29,salary:3000});
db.persons.find().pretty();
// db.cars.insertOne({model:"BMW",price:4000,owner:ObjectId('65c0ef0c9c0851571f56760a')});
db.cars.find().pretty();

// ******************************** One to Many - Embedded  *****************************
show("dbs");
use("support");
// db.questionThreads.insertOne({creator: "Max",question:"How does that all work?",answers: ["q1a1","q1a2"]});
db.questionThreads.find().pretty();
// db.answers.insertMany([ 
//         {_id:"q1a1",text: "it works like that."},
//         {_id:"q1a2",text:"Thanks!"}]);
db.answers.find().pretty();
// db.questionThreads.deleteMany({});
// db.questionThreads.insertOne({creator:"Max",question:"How does that works?",answers:[{text:"Like that ."},{text:"Thanks!"}]});
db.questionThreads.find().pretty();

// *********************************** One to Many - References ******************************
show('dbs');
use('cityData');
// db.cities.insertOne({name:"New York City",coordinates:{lat: 21,lng:55}});
db.cities.find().pretty();
// db.citizens.insertMany([
//         {name: "Max Schwarzmuleller",cityId: ObjectId('65c0f493666bd18a13bd79ca')},
//         {name:"Manuel Lorenz",cityId:ObjectId('65c0f493666bd18a13bd79ca')}
//     ]);
db.citizens.find().pretty();

// *********************************** Many to Many - Embedded ******************************
show('dbs');
use('shop');
// db.products.insertOne({title:"A book",price:12.99});
db.products.find().pretty();
// db.customers.insertOne({name:"Max",age: 29});
// db.customers.find().pretty();
// db.orders.insertOne({customerId: ObjectId("65c22ecdf1ea0c163a46f3dc"),orderId: ObjectId("65c22eabcef1c806cd86231a")});
// db.orders.find().pretty();
// db.customers.updateOne({},{$set: {orders: [{title:"A Book",price: 12.99,quantity:2}]}})
db.customers.find().pretty();
// or
// db.customers.updateOne({},{$set: {orders: [{productId:ObjectId("65c22eabcef1c806cd86231a"),quantity:2}]}});
db.customers.find().pretty();

