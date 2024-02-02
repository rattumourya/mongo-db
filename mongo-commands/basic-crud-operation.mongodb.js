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

// get flightData collection data
db.flightData.find().pretty();