import React from 'react'
import WeatherContent from './card_content/WetherContent'
import AirPolutionContent from './card_content/AirPolutionContent'

import './card.css'

const Card = ({ title }) => {
  return (
    <div className="card">
      <h1 className="card__title">{title}</h1>
      {title === 'Weather' ? <WeatherContent /> : <AirPolutionContent />}
      <div className="card__footer" />
    </div>
  )
}

export default Card
