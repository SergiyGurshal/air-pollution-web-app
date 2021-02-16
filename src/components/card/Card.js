import React from 'react'

import './card.css'

const Card = ({ title }) => {
  return (
    <div className="card">
      <h1 className="card__title">{title}</h1>
    </div>
  )
}

export default Card
