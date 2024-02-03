// show all available db
show('dbs');

// switch to flight database
use("flights");

// insert document collection 
// db.flightData.insert({
//     "departureAirport": "LHR",
//     "arrivalAirport": "TXL",
//     "aircraft": "Airbus A320",
//     "distance": 950,
//     "intercontinental": false
//   })


// db.flightData.insertOne({
//     departureAirport: "TXL",
//     arrivalAirport: "LHR"
// })

// db.flightData.insertOne({
//     _id: "txl-lhr-1",
//     departureAirport: "TXL",
//     arrivalAirport: "LHR"
// })



// delete one document
// db.flightData.deleteOne({departureAirport: "TXL"})


// db.flightData.deleteMany();
// Error : Missing required argument 


// db.flightData.updateOne({distance: 2000, marker: "delete"});
//Update document requires atomic operators

// db.flightData.updateOne({distance: 12000}, {$set: {marker: "delete"}})


// db.flightData.updateMany({},{$set: {marker: "toDelete"}});

// db.flightData.deleteMany({marker:"toDelete"});
// deleted all documents inserted in the filghtsData

// db.flightData.insertMany([
//     {
//       "departureAirport": "MUC",
//       "arrivalAirport": "SFO",
//       "aircraft": "Airbus A380",
//       "distance": 12000,
//       "intercontinental": true
//     },
//     {
//       "departureAirport": "LHR",
//       "arrivalAirport": "TXL",
//       "aircraft": "Airbus A320",
//       "distance": 950,
//       "intercontinental": false
//     }
//   ]);
db.flightData.find({intercontinental: true}); 
db.flightData.find({distance: 950});
db.flightData.find({distance: {$gt: 900}}).pretty();
// db.flightData.findOne({distance: {$gt: 900}}).pretty();
//db.flightData. ... 900}}).pretty is not a function

db.flightData.findOne({distance: {$gt: 900}});

// db.flightData.updateOne({_id:ObjectId('65bdfc9b0b79889e4bf77d56')},{$set: {deplayed: true}});

// db.flightData.updateOne({_id:ObjectId('65bdfc9b0b79889e4bf77d56')}, {deplayed: true});
//Update document requires atomic operators

// db.flightData.updateMany({_id:ObjectId('65bdfc9b0b79889e4bf77d56')}, {deplayed: true});
// Update document requires atomic operators

// db.flightData.update({_id:ObjectId('65bdfc9b0b79889e4bf77d56')}, {deplayed: true});
// Update document requires atomic operators


// db.flightData.replaceOne({_id:ObjectId('65bdfc9b0b79889e4bf77d56')}, {deplayed: true});

// db.flightData.updateOne({_id:ObjectId('65bdfc9b0b79889e4bf77d56')},
//                         {$set: {
//                             "departureAirport": "MUC",
//                             "arrivalAirport": "SFO",
//                             "aircraft": "Airbus A380",
//                             "distance": 12000,
//                             "intercontinental": true,
//                             "deplayed": false
//                         }});



// Add passenger collection in flight db
// db.passenger.insertMany([
//     {
//       "name": "Max Schwarzmueller",
//       "age": 29
//     },
//     {
//       "name": "Manu Lorenz",
//       "age": 30
//     },
//     {
//       "name": "Chris Hayton",
//       "age": 35
//     },
//     {
//       "name": "Sandeep Kumar",
//       "age": 28
//     },
//     {
//       "name": "Maria Jones",
//       "age": 30
//     },
//     {
//       "name": "Alexandra Maier",
//       "age": 27
//     },
//     {
//       "name": "Dr. Phil Evans",
//       "age": 47
//     },
//     {
//       "name": "Sandra Brugge",
//       "age": 33
//     },
//     {
//       "name": "Elisabeth Mayr",
//       "age": 29
//     },
//     {
//       "name": "Frank Cube",
//       "age": 41
//     },
//     {
//       "name": "Karandeep Alun",
//       "age": 48
//     },
//     {
//       "name": "Michaela Drayer",
//       "age": 39
//     },
//     {
//       "name": "Bernd Hoftstadt",
//       "age": 22
//     },
//     {
//       "name": "Scott Tolib",
//       "age": 44
//     },
//     {
//       "name": "Freddy Melver",
//       "age": 41
//     },
//     {
//       "name": "Alexis Bohed",
//       "age": 35
//     },
//     {
//       "name": "Melanie Palace",
//       "age": 27
//     },
//     {
//       "name": "Armin Glutch",
//       "age": 35
//     },
//     {
//       "name": "Klaus Arber",
//       "age": 53
//     },
//     {
//       "name": "Albert Twostone",
//       "age": 68
//     },
//     {
//       "name": "Gordon Black",
//       "age": 38
//     }
//   ]);

// db.flightData.find().pretty();
// db.passenger.find()

// get all data in once
// db.passenger.find().toArray();

//print the data using forEach loop
// db.passenger.find().forEach((passengerData) => {printjson(passengerData)});

// projection

db.passenger.find({},{name: 1}).toArray();
// id will always project implicitly 


db.passenger.find({},{name: 1, _id: 0}).toArray();
// _id can be excluded by usining _id: 0 using projection


// Embedded document
//  Up to 100 level of nesting
// Max 16mb document


// Arrays
// list of document can be added inside a document

// db.flightData.updateMany({} , {$set: {status: { description: "on-time" , lastupdated: "1 hour ago"}}});

// db.flightData.updateMany({} , {$set: {status: { description: "on-time" , lastupdated: "1 hour ago" , details: {responsible: "Ratan mourya"}}}});

// db.flightData.find().pretty();

// db.passenger.updateOne({name: "Albert Twostone"},{$set: {hobbies: ["Sports","cooking"]}});



db.passenger.find().pretty().toArray();