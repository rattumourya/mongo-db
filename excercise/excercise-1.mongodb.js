show("dbs");
// users , comments , posts
// create blog database
use("blog");
// create users collection in blog db
// db.users.insertMany([
//     {name: "Ratan Mourya",age:25,email:"ratan.mourya@gmail.com"},
//     {name: "Somya Omer",age:26,email:"somya.omer@gmail.com"},
// ])

// see the inserted users in the playground result
// db.users.find().pretty();

// create posts collection in blog db
// db.posts.insertOne({
//     title:"My First Post",
//     text: "This is my first post, I hope you liked it!",
//     tags:["new","tech"],
//     creators: ObjectId("65c23f501c4f1be97f1ad0e0"),
//     comments: [
//         {text: "I liked this post",author: ObjectId("65c23f501c4f1be97f1ad0e1")}
//     ]
// });
// see our post in the playground
// db.posts.find().pretty();

// ******************************** Schema Validation ************************
// db.posts.drop();
// db.posts.find().pretty();
// db.createCollection("posts", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             required: ["title", "text", "creator", "comments"],
//             properties: {
//                 title:{
//                     bsonType:"string",
//                     description:"must be a string and is required"
//                 },
//                 text: {
//                     bsonType: "string",
//                     description:"must be a string and is required"
//                 },
//                 creator:{
//                     bsonType:"objectId",
//                     description:"must be an objectid and is required"
//                 },
//                 comments: {
//                     bsonType:"array",
//                     description:"must be a array and is required",
//                     items:{
//                         bsonType:"object",
//                         required: ["text","author"],
//                         properties: {
//                             text:{
//                                 bsonType:"string",
//                                 description: "must be a string and is required"
//                             },
//                             author:{
//                                 bsonType:"objectId",
//                                 description:"must be an objectid and is required"
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// });

// db.posts.insertOne({
//     title:"My First Post",
//     text: "This is my first post, I hope you liked it!",
//     tags:["new","tech"],
//     creator: ObjectId("65c23f501c4f1be97f1ad0e0"),
//     comments: [
//         {text: "I liked this post",author: ObjectId("65c23f501c4f1be97f1ad0e1")}
//     ]
// });
// db.posts.find().pretty();
// db.runCommand({collMod:"posts",  validator: {
//     $jsonSchema: {
//         bsonType: "object",
//         required: ["title", "text", "creator", "comments"],
//         properties: {
//             title:{
//                 bsonType:"string",
//                 description:"must be a string and is required"
//             },
//             text: {
//                 bsonType: "string",
//                 description:"must be a string and is required"
//             },
//             creator:{
//                 bsonType:"objectId",
//                 description:"must be an objectid and is required"
//             },
//             comments: {
//                 bsonType:"array",
//                 description:"must be a array and is required",
//                 items:{
//                     bsonType:"object",
//                     required: ["text","author"],
//                     properties: {
//                         text:{
//                             bsonType:"string",
//                             description: "must be a string and is required"
//                         },
//                         author:{
//                             bsonType:"objectId",
//                             description:"must be an objectid and is required"
//                         }
//                     }
//                 }
//             }
//         }
//     }
// },
// validationAction:"warn"
// });

// db.posts.insertOne({
//     title:"My First Post",
//     text: "This is my first post, I hope you liked it!",
//     tags:["new","tech"],
//     creator: ObjectId("65c23f501c4f1be97f1ad0e0"),
//     comments: [
//         {text: "I liked this post",author: 12}
//     ]
// });
db.posts.find().pretty();
