const router = require("express").Router();
const mentorRoutes = require("./mentors");

// Mentor routes
router.use("/mentors", mentorRoutes);

module.exports = router;
