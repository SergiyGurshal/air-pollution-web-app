import React, { FC, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import loadingGif from '../../../images/loading.svg'

const css = require('./card-content.css')

interface IWeatherInfo {
  ts: string
  tp: number
  pr: number
  hu: number
  ws: number
  wd: number
  ic: string
}

type WeatherContentProps = {
  weatherInfo: IWeatherInfo
}

const getIcon = (icon_type: string) => {
  const gifTemplate = /.*loading.*.svg/g
  if (gifTemplate.test(icon_type)) return icon_type

  return require(`../../../images/weather_icons/${icon_type}.png`).default
}

const WeatherContent: FC<WeatherContentProps> = ({ weatherInfo }: WeatherContentProps) => {
  const [image, setImage] = useState(loadingGif)
  const [temperature, setTemperature] = useState('loading...')
  const [pressure, setPressure] = useState('loading...')
  const [humidity, setHumidity] = useState('loading...')
  const [windSpeed, setWindSpeed] = useState('loading...')
  const [windDirection, setWindDirection] = useState('loading...')

  const setWeatherInfo = () => {
    if (weatherInfo.ic) setImage(weatherInfo.ic)
    setTemperature(weatherInfo.tp.toString())
    setPressure(weatherInfo.pr.toString())
    setHumidity(weatherInfo.hu.toString())
    setWindSpeed(weatherInfo.ws.toString())
    setWindDirection(weatherInfo.wd.toString())
  }

  useEffect(() => {
    setWeatherInfo()
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

const getStateToProps = (state: any) => ({ weatherInfo: state.enviromentInfo.current.weather })

export default connect(getStateToProps)(WeatherContent)
