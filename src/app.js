const express = require('express');
const app = express();
const hbs = require('hbs');
const requests = require('requests');
const port = process.env.PORT || 8000;
const path = require('path');

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");


app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("error");
});

app.listen(8000, () => {
    console.log(`Server started at ${port}`);
});