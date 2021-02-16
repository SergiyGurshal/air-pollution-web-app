import React from 'react'

import Card from '../card/Card'

import './main-content.css'

const MainContent = () => {
  return (
    <div className="main-content">
      <Card {...{ title: 'Weather' }} />
      <Card {...{ title: 'Air Polution' }} />
    </div>
  )
}

export default MainContent
