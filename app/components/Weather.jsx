import React from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'
import ErrorModal from 'ErrorModal'

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleGetWeather: function (location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined
    })

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, (e) => {
      this.setState({
        isLoading: false,
        errorMessage: e.message
      })
    })
  },
  render: function () {
    var {isLoading, location, temp, errorMessage} = this.state

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        )
      }
    }

    function renderMessage () {
      if (isLoading) {
        return <h3 className='text-center'>Loading...</h3>
      } else if (location && temp) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }
    return (
      <div>
        <h1 className='text-center page-title'>Get Weather</h1>
        <WeatherForm onGetWeather={this.handleGetWeather} />
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})

module.exports = Weather
