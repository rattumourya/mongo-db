// show('dbs');

// use("test");
// db.dropDatabase();
// show('dbs');

use("contactData");
// db.personData.insertOne({
//     name:"Max",
//     age: 30,
//     hobbies: ["Sports","Cooking"]
// });

// db.personData.insertOne({
//     name:"Manuel",
//     age: 31,
//     hobbies: ["Cars","Cooking"]
// });

// db.personData.insertMany([{
//     name:"Anna",
//     age: 29,
//     hobbies:["Sports","Yoga"]
// }]);


// db.personData.insertMany([
//     {name: "Maria",age:31},
//     {name: "Chris",age:25}
// ]);

// insert method not recommended
// db.personData.insert({
//     name:"Phil",
//     age:35
// })

// show("dbs");

// db.personData.insert([
//     {name: "Sandeep",age:28},
//     {name: "Hans",age:38}
// ]);

// db.personData.find();


// db.hobbies.insertMany([
//     {_id: "sports", name: "Sports"},
//     {_id: "cooking", name: "Cooking"},
//     {_id: "cars", name: "Cars"}
// ]); 

// db.hobbies.insertMany([
//     {_id: "yoga", name: "Yoga"},
//     {_id: "cooking", name: "Cooking"},
//     {_id: "hiking", name: "Hiking"}],
//     {ordered:false}); 

// E11000 duplicate key error collection: contactData.hobbies index: _id_ dup key: { _id: "cooking" }


// db.hobbies.find().pretty();
// db.personData.insertOne({name:"ratan",age:25},{writeConcern: {w: 0}});
// db.personData.insertOne({name:"Alex",age:25},{writeConcern: {w: 1}});
// db.personData.insertOne({name:"Michael",age:51},{writeConcern: {w: 1,j:false}});
// db.personData.insertOne({name:"Michaela",age:51},{writeConcern: {w: 1,j:true}});
// db.personData.insertOne({name:"Michael",age:51},{writeConcern: {w: 1,j:true,wtimeout:200}});
// db.personData.insertOne({name:"Michael",age:51},{writeConcern: {w: 1,j:true,wtimeout:1}});