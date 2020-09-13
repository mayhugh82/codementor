import axios from "axios";

export default {
  // Gets all mentors
  getMentors: function() {
    return axios.get("/api/mentors");
  },
  // Gets the mentors with the given id
  getMentor: function(id) {
    return axios.get("/api/mentors/" + id);
  },
  // Deletes the mentors with the given id
  deleteMentor: function(id) {
    return axios.delete("/api/mentors/" + id);
  },
  // Saves a mentors to the database
  saveMentor: function(mentorData) {
    return axios.post("/api/mentors", mentorData);
  }
};
