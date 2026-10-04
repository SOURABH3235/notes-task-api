const express = require("express");
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote
} = require("../controllers/note.controller");
const { validateNote } = require("../validators/note.validator");

const router = express.Router();

router
  .route("/")
  .get(getNotes)
  .post(validateNote, createNote);

router
  .route("/:id")
  .get(getNoteById)
  .put(validateNote, updateNote)
  .delete(deleteNote);

module.exports = router;