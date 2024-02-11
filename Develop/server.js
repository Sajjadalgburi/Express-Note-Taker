const express = require("express");
const app = express();
const path = require("path");
const PORT = procces.env.PORT || 3001;

// Middleware's for json, grabbing user data and static assets
app.use(express.static("public"));
app.use(experss.json());
app.use(express.urlencoded({ extended: true }));

// route for 404 page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/404.html"));
});

// route for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/homepage.html"));
});
