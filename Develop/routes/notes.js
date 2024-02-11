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

module.exports = notes;
