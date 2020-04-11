const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=eb95e3a4e34156e4e3e4a375c3a7070f&query=${latitude},${longitude}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect forecast services!", undefined);
    } else if (body.error) {
      callback("Unable to find the location.", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions}, It is currently temperature ${body.current.temperature} degress out. Humidity is ${body.current.humidity}, There is a ${body.current.feelslike}% chance of rain. Wind speed is ${body.current.wind_speed} and  Wind degree ${body.current.wind_degree}`
      );
    }
  });
};

module.exports = forecast;
//
