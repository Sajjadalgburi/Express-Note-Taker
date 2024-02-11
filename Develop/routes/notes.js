const path = require("path");
const notes = require("express").Router();
const uuid = require("../helpers/uuid");

// Helper functions for reading and writing to the JSON file
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../helpers/fsUtils");

// Define the path to db.json
const dbFilePath = path.join(__dirname, "../db/db.json");

// GET method to read the db.json file and return all saved notes as JSON
notes.get("/", (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile(dbFilePath).then((data) => res.json(JSON.parse(data)));
});

// Recives request from user to store a new note in db.json
notes.post("/", (req, res) => {
  console.info(`${req.method} request received to add a new note`);

  const { title, text } = req.body; // checks if title and text are within the body of web

  if (req.body) {
    // create new note with unique id
    const newNote = {
      title,
      text,
      id: uuid(),
    };
    readAndAppend(newNote, dbFilePath);
    res.json(`Note added successfully 🚀`);
  } else {
    res.error("Error in adding note"); // send user error message
  }
});

// GET method to grab respective note id
notes.get("/:note_id", (req, res) => {
  const id = req.params.note_id;
  readFromFile(dbFilePath)
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.note_id !== id);
      return result.length > 0
        ? res.json(result)
        : res.json("No tip with that ID");
    });
});

module.exports = notes;
