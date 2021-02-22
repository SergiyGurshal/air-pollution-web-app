import React, { useEffect, useState } from 'react'
import { useDropdown } from '../../dropdown/dropodown-context'

import './card-content.css'

const getIcon = (icon_type) => {
  return require(`../../../images/weather_icons/${icon_type}.png`).default
}

const WeatherContent = () => {
  const [image, setImage] = useState('01d')
  const [temperature, setTemperature] = useState('loading...')
  const [pressure, setPressure] = useState('loading...')
  const [humidity, setHumidity] = useState('loading...')
  const [windSpeed, setWindSpeed] = useState('loading...')
  const [windDirection, setWindDirection] = useState('loading...')

  const dropdownContext = useDropdown()

  const getWeatherByCurrentIP = () => {
    fetch('https://api.airvisual.com/v2/nearest_city?key=f2a437c2-fbc6-4858-b197-05eb662afb20')
      .then((response) => response.text())
      .then((obj) => JSON.parse(obj).data)
      .then((data) => {
        setImage(data.current.weather.ic)
        setTemperature(data.current.weather.tp)
        setPressure(data.current.weather.pr)
        setHumidity(data.current.weather.hu)
        setWindSpeed(data.current.weather.ws)
        setWindDirection(data.current.weather.wd)
      })
      .catch((error) => console.log('error', error))
  }

  const getWeatherByLocation = () => {
    fetch(
      `https://api.airvisual.com/v2/city?city=${dropdownContext.curCity}&state=${dropdownContext.curState}&country=${dropdownContext.curCountry}&key=f2a437c2-fbc6-4858-b197-05eb662afb20`
    )
      .then((response) => response.text())
      .then((obj) => JSON.parse(obj).data)
      .then((data) => {
        setImage(data.current.weather.ic)
        setTemperature(data.current.weather.tp)
        setPressure(data.current.weather.pr)
        setHumidity(data.current.weather.hu)
        setWindSpeed(data.current.weather.ws)
        setWindDirection(data.current.weather.wd)
      })
      .catch((error) => console.log('error', error))
  }

  useEffect(() => {
    getWeatherByCurrentIP()
  }, [])

  useEffect(() => {
    if (dropdownContext.curCity === 'Select...') {
      getWeatherByCurrentIP()
    } else {
      getWeatherByLocation()
    }
  }, [dropdownContext.curCity])

  return (
    <div className="card__content">
      <img src={getIcon(image)} className="content__icon" />
      <p className="content__title">{`+${temperature}°C`}</p>
      <div className="content__aditional-info">
        <p className="aditional-info__text">{`Pressure: ${pressure} hPa`}</p>
        <p className="aditional-info__text">{`Humidity: ${humidity}%`} </p>
        <p className="aditional-info__text">{`Wind speed: ${windSpeed} m/s`}</p>
        <p className="aditional-info__text">{`Wind direction: ${windDirection}°`} </p>
      </div>
    </div>
  )
}

export default WeatherContent
