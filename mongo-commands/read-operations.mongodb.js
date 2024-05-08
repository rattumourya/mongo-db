// mongoimport --db shows --collection movies --file json_files/tv-shows.json --jsonAr
// ray

use("shows");
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
db.movies.find({"rating.average": {$gt: 9}, "genres": "Drama"}).count();