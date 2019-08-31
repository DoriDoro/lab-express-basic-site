const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const data = require("./data.js");

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

hbs.registerPartials(path.join(__dirname, "views/partials"));


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/photo_gallery", (req, res) => {
    res.render("photo_gallery", data);
});

app.get("/contact", (req, res) => {
    res.render("contact");
});


const listener = app.listen(3050, () => {
    console.log(`server is up @ http://localhost: ${listener.address().port}`);
});

