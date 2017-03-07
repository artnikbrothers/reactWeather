import React from 'react'

const WeatherForm = React.createClass({
  getWeather: function (e) {
    e.preventDefault()

    var location = this.refs.location.value

    if (location.length > 0) {
      this.refs.location.value = ''
      this.props.onGetWeather(location)
    }
  },
  render: function () {
    return (
      <form onSubmit={this.getWeather}>
        <input type='text' ref='location' placeholder='Enter city name' />
        <button className='button expanded hollow'>Get Weather</button>
      </form>
    )
  }
})

module.exports = WeatherForm
