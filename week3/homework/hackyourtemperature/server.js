const express = require("express");
const exphbs = require("express-handlebars");
const axios = require("axios");
const { json, response } = require("express");



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

  const API_KEY = require('./sources/keys.json').API_KEY;
  const submitCity = req.body.cityName

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${submitCity}&units=metric&appid=${API_KEY}`)
    .then(response => {
      const temp = response.data.main.temp
      res.render('index', { weatherText: `The temperature in ${submitCity} is ${temp}°C!` })
    })
    .catch(err => {
      res.render('index', { weatherText: "City is not found!" })
    })
})
app.listen(port)