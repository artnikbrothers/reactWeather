import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=d5d94a7c93421070eb1c07a0c08003f6&units=metric'

module.exports = {
  getTemp: function (location) {
    if (!location) return false
    var encodedLocation = encodeURIComponent(location)
    var weatherAPIURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(weatherAPIURL).then((res) => {
      if (!res.data.list[0]) {
        throw new Error('Please enter valid City')
      } else {
        return res.data.list[0].main.temp
      }
    }, (res) => {
      throw new Error(res.data.message)
    })
  }
}
