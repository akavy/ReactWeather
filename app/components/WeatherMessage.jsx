import React from 'react';

var WeatherMessage = ({ temp, location }) => {
  return (
    <h3>It is {temp}C in {location}.</h3>
  );
};

module.exports = WeatherMessage;
