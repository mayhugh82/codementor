const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
  name: { type: String, required: true },
  languages: { type: Array, required: true },
  about: String,
});

const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
