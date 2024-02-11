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

module.exports = notes;
