import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import loadingGif from '../../../images/loading.svg'

import './card-content.css'

const getIcon = (icon_type) => {
  const gifTemplate = /.*.svg/
  if (gifTemplate.exec(icon_type)) return icon_type
  return require(`../../../images/weather_icons/${icon_type}.png`).default
}

const WeatherContent = ({ weatherInfo }) => {
  const [image, setImage] = useState(loadingGif)
  const [temperature, setTemperature] = useState('loading...')
  const [pressure, setPressure] = useState('loading...')
  const [humidity, setHumidity] = useState('loading...')
  const [windSpeed, setWindSpeed] = useState('loading...')
  const [windDirection, setWindDirection] = useState('loading...')

  const setWeatherInfo = (weatherInfo) => {
    if (weatherInfo.ic) setImage(weatherInfo.ic)
    setTemperature(weatherInfo.tp)
    setPressure(weatherInfo.pr)
    setHumidity(weatherInfo.hu)
    setWindSpeed(weatherInfo.ws)
    setWindDirection(weatherInfo.wd)
  }

  useEffect(() => {
    setWeatherInfo(weatherInfo)
  }, [weatherInfo])

  return (
    <div className="card__content unselectable">
      <img src={getIcon(image)} className="content__icon" />
      <p className="content__title">{`${temperature}°C`}</p>
      <div className="content__aditional-info">
        <p className="aditional-info__text">{`Pressure: ${pressure} hPa`}</p>
        <p className="aditional-info__text">{`Humidity: ${humidity}%`} </p>
        <p className="aditional-info__text">{`Wind speed: ${windSpeed} m/s`}</p>
        <p className="aditional-info__text">{`Wind direction: ${windDirection}°`} </p>
      </div>
    </div>
  )
}

const getStateToProps = (state) => ({ weatherInfo: state.enviromentInfo.current.weather })

export default connect(getStateToProps)(WeatherContent)
