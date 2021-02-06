const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");



const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/weather', (req, res) => {

  let submitCity = req.body.cityName
  res.send(submitCity)

})

app.listen(port)