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

db.flightData.find().pretty();