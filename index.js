import express from "express";
const app = express();
const port = 3000;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index.ejs");
  console.log("Home page accessed");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
  console.log("Contact page accessed");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log("Server started");
});
