const router = require("express").Router();
const mentorsController = require("../../controllers/mentorsController");

// Matches with "/api/mentors"
router.route("/")
  .get(mentorsController.findAll)
  .post(mentorsController.create);

// Matches with "/api/mentors/:id"
router
  .route("/:id")
  .get(mentorsController.findById)
  .put(mentorsController.update)


module.exports = router;
