const express = require("express");

const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent
} = require("../controllers/events");

const Event = require("../models/Event");

const router = express.Router({ mergeParams: true });
const advancedResults = require("../middleware/advancedResults");
const { authorize, protect } = require("../middleware/auth");

router
  .route("/")
  .get(
    advancedResults(Event, {
      path: "user",
      select: "name description"
    }),
    getEvents
  )
  .post(protect, createEvent);
//getCOurse func populate({path:'bootcamp',select:'name descroption '})populate path them
router
  .route("/:id")
  .get(getEvent)
  .put(protect, updateEvent)
  .delete(protect, deleteEvent);
//cant not (/:id/id)get(:/id)
module.exports = router;
