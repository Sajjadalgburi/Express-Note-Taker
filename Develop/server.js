const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Middleware's for json, grabbing user data and static assets
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/homepage.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// route for 404 page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public/404.html"));
});

app.listen(PORT, () => {
  console.log(`listening on server http://localhost:${PORT}`);
});
