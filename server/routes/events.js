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
  .get(
    "/",
    advancedResults(Event, {
      path: "user",
      select: "name description"
    }),
    getEvents
  )
  .post("/create", createEvent);

router
  .get("/:id", getEvent)
  .put("/:id/update", protect, updateEvent)
  .delete("/:id/delete", deleteEvent);
//cant not (/:id/id)get(:/id)
module.exports = router;
