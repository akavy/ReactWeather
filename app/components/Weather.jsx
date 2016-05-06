import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import ErrorModal from 'ErrorModal';
import openWeatherMap from 'openWeatherMap';

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: null,
      location: null,
      temp: null,
      country: null
    });

    openWeatherMap.getTemp(location).then(function(result) {
      that.setState({
        location: result.location,
        temp: result.temp,
        country: result.country,
        isLoading: false
      });
    }, function(err) {
      that.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function() {
    var { isLoading, temp, location, country, errorMessage } = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location && country) {
        return <WeatherMessage temp={temp} location={location} country={country}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
