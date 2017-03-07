import React from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleGetWeather: function (location) {
    this.setState({isLoading: true})

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, (errorMessage) => {
      this.setState({isLoading: false})
      window.alert(errorMessage)
    })
  },
  render: function () {
    var {isLoading, location, temp} = this.state
    function renderMessage () {
      if (isLoading) {
        return <h2>Loading...</h2>
      } else if (location && temp) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }
    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onGetWeather={this.handleGetWeather} />
        {renderMessage()}
      </div>
    )
  }
})

module.exports = Weather
