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
    languages: [
      "HTML",
      "CSS",
      "Javascript",
      "Jquery",
      "Node.js",
      "SQL",
      "MongoDB",
      "React",
    ],
    about:
      "I value teaching my students above all things.  When I was asked how I finds time for my wife and sweet puppy Charlie I replied “those things are unimportant in life!”  I will always make you a priority! jim@mycastle.com",
  },
  {
    name: "Curtis Lane",
    languages: [
      "HTML",
      "CSS",
      "Javascript",
      "Jquery",
      "Node.js",
      "SQL",
      "MongoDB",
      "React",
      "Spanish too!",
    ],
    about:
      "Curtis wasn't able to fill this out because was helping all the students in our bootcamp.  Let's face it, this application would not even be up and running if it weren't for him! Thanks for always being there - anyone who wants/needs a great mentor contact Curtis!  curtis@lifecoach.com",
  },
  {
    name: "Tim Fisher",
    languages: ["HTML", "Javascript", "Node.js", "MongoDB", "React"],
    about:
      "Tim knows all the hot keys and can teach you all the short cuts!  If you’re looking for a very beardy guy – he’s your mentor! tim@bigbeards.com",
  },
  {
    name: "Julian Villalba",
    email: "Dr.V@swollenhand.com",
    languages: ["HTML", "Javascript", "JQuery"],
    about:
      "Julian enjoys mentoring students about the coding world when he is not doctoring.  He is super friendly and always happy to help! Dr.V@swollenhand.com",
  },
  {
    name: "Dana Nobile",
    languages: ["HTML", "CSS", "Javascript", "JQuery"],
    about:
      "Dana is a front end expert!  She will help you get that fabulous looking and perfectly functioning website you have always wanted.  She might even throw in a free yoga lesson if you do a good job! Dana@dogmom.com",
  },
  {
    name: "Anthony Carmack",
    languages: ["HTML", "Node.js", "SQL", "MongoDB", "React"],
    about:
      "Anthony is a very busy man, but if you need back end help and you can find a time to squeeze into his schedule he will get your apps running!  He is highly experienced and is worth the odd hours to work with him. anthony@twins4life.com",
  },
  {
    name: "Jackie Geiger",
    languages: ["CSS", "Javascript", "SQL", "MongoDB", "React"],
    about:
      "Jackie is a great mentor and can help you figure out all the bugs.  She has EXPERT google foo skills and is a wealth of knowledge. jackie@chihuahuasrock.com",
  },
  {
    name: "Andy Edstrom",
    languages: ["HTML", "Javascript", "Jquery", "SQL", "MongoDB"],
    about:
      "Andy has helped numerous newbies find their footing in the development world.  He will quit his job to make sure you understand the ins and outs of coding! andy@vollyballobsessed.com",
  },
  {
    name: "Diana Mayhugh",
    languages: ["Node.js", "SQL", "MongoDB", "React"],
    about:
      "Diana is not really sure how she ended up as a mentor on this site and is great at deleting your entire project and creating bugs that have never existed before.  If you need a challenge, she is your girl! diana@estimator.com",
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
