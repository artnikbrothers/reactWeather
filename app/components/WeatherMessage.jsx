import React from 'react'

const WeatherMessage = ({location, temp}) => {
  return (
    <div>
      <span className=''>It's {temp} in {location}</span>
    </div>
  )
}

module.exports = WeatherMessage
