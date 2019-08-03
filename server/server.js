const express = require('express');
const morgan = require('morgan');
const axios = require('axios'); //insert axios on backend once API call is successful on the front-end
const app = express();

app.use(morgan('dev'));

app.use(express.static('dist'));
app.use(express.static('public'));

const cityIds = {
    sandiego: 4726311, //need to retrieve ids for each cities from JSON object
    newyork: 5128638,
    washingtondc: 4140963,
    london: 2643743,
    tokyo: 1850147
  };

  app.get('/weather', (req, res, next) => {
   //grab the the current city data using the req. paramter
   //create an if else statement that says if the current city data is equal to the one
   //of the preloaded cities then return the data for that city
   //otherwise return the data for the city that is being searched for

    
  });

  app.get('/(*)', (req, res, next) => 
  res.status(404)
  .send('Sorry, you tried accessing a page that does not exist.'))

function getWeatherData(id) {
    return axios
      .get(``)
      .then(response => ( {
      }
      ));
  }

  function getCityId(city) {
    return axios
      .get(``)
      .then();
  }
module.exports = app;
