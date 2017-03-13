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
        <input type='search' ref='location' placeholder='Search wearther by city' />
        <button className='button expanded hollow'>Get Weather</button>
      </form>
    )
  }
})

module.exports = WeatherForm
