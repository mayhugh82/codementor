const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    name: "Jim Dhima",
    languages: ["HTML", "CSS", "Javascript", "Jquery", "Node.js", "SQL", "MongoDB", "React"],
    about:
      "I value teaching my students above all things.  When I was asked how I finds time for my wife and sweet puppy Charlie I replied /“those things are unimportant in life!/”  I will always make you a priority! jim@mycastle.com",
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
