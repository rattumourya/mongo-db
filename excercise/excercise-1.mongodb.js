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
db.posts.find().pretty();