import React from 'react'
import WeatherContent from './card_content/WetherContent'
import AirPollutionContent from './card_content/AirPollutionContent'

const css = require('./card.css')

const Card = ({ title }: { title: string }) => {
  return (
    <div className="card">
      <h1 className="card__title unselectable">{title}</h1>
      {title === 'Weather' ? <WeatherContent /> : <AirPollutionContent />}
      <div className="card__footer" />
    </div>
  )
}

export default Card
