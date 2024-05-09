// mongoimport --db shows --collection movies --file json_files/tv-shows.json --jsonAr
// ray

// use("shows");
// db.movies.findOne();

// db.movies.find({name:"The Last Ship"}).pretty();

// db.movies.find({runtime: 60}).pretty();
// db.movies.findOne({runtime: 60});

// start learning comparison operator

// db.movies.findOne({runtime: {$eq: 60}})
// db.movies.find({runtime: {$ne: 60}}).pretty();

// db.movies.find({runtime: {$lt: 50}}).pretty();
// db.movies.find({runtime: {$lte: 42}}).pretty();
// db.movies.find({runtime: {$gte: 50}}).pretty();

// db.movies.find({"rating.average": {$gt: 7}}).pretty();
// db.movies.find({"genres": "Drama"}).pretty();
// db.movies.find({"genres" : ["Drama"]}).pretty();

// db.movies.find({runtime: {$in: [30, 42]}}).pretty();
// db.movies.find({runtime: {$nin: [30, 42]}}).pretty();

// db.movies.find({"rating.average": {$gt: 5}}).pretty();
// db.movies.find({"rating.average": {$gt: 9}}).count();
// db.movies.find({"rating.average": {$gt: 9.5}}).count();
// db.movies.find({"rating.average": {$gt: 9.4}}).count();
// db.movies.find({"rating.average": {$gt: 9.3}}).count();

// db.movies.find({$or: [{"rating.average": {$lt: 5}}, {"rating.average": {$gt: 9.3}}]}).pretty();
// db.movies.find({$nor: [{"rating.average": {$lt: 5}}, {"rating.average": {$gt: 9.3}}]}).pretty();

// db.movies.find({$and: [{"rating.average": {$gt: 9}},{genres: "Drama"}]}).pretty();
// db.movies.find({"rating.average": {$gt: 9}, "genres": "Drama"});
// db.movies.find({"rating.average": {$gt: 9}, "genres": "Drama"}).count();

// db.movies.find({runtime: {$not: {$gt: 60}}}).pretty();
// db.movies.find({runtime: {$not: {$eq: 60}}}).count();

// create user database
use("user");
// db.users.insertMany([
//                 {name: "Max", hobbies: [{title: "Sports",frequency:3},{title: "Cooking",frequency:6}],phone: "0131782734"},
//                 {name: "Manuel", hobbies: [{title: "Cooking",frequency:5},{title: "Cars",frequency:2}],phone: "012177972",age: 30}
//                 ]);

// db.users.findOne({name: "Manuel"});
// db.users.find().pretty();
// db.users.find({age: {$exists: true}}).pretty();
// db.users.find({age: {$exists: true,$gte: 30}}).pretty();
// db.users.insertOne({name: "Max", hobbies: [{title: "Sports",frequency:2},{title: "Yoga",frequency:3}],phone: "12341234",age: null});
// db.users.find().pretty();
// db.users.find({age: {$exists: false}}).pretty();
// db.users.find({age: {$exists: true,$eq: null}}).pretty();
// db.users.find({age: {$exists: true,$ne: null}}).pretty();

// db.users.insertOne({name: "Ratan", hobbies: [{title: "Sports",frequency:10},{title: "Driving",frequency:6}],phone: 5245658578});
// db.users.find().pretty();
// db.users.find({phone: {$type: ["double"]}}).pretty();
// db.users.find({phone: {$type: "number"}}).pretty();
// db.users.find({phone: {$type: ["number","string"]}}).pretty();

