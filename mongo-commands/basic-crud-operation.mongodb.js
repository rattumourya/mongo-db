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