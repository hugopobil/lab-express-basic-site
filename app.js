const express = require("express")
const app = express()

app.use(express.static('public'));

app.set("views", __dirname + "/views")
app.set("view_engine", "hds")

app.get('/', (req, res, next) => {
  console.log(__dirname);

  let data = {
    name: "Hugo"
  }

  res.render("home.hbs", data);
});

app.get('/about', (req, res, next) => {
  console.log(__dirname);
  res.render("about.hbs");
});

app.get('/works', (req, res, next) => {
  console.log(__dirname);
  res.render("works.hbs");
});

app.listen(3000, () => {
  console.log("Runnin on port 3000")
})
