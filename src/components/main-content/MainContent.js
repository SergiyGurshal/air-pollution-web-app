import React from 'react'

import Card from '../card/Card'

import backgroundVideo from '../../images/background_video/water_wave_2.mp4'

import './main-content.css'

const MainContent = () => {
  return (
    <div className="main-content">
      <Card {...{ title: 'Weather' }} />
      <Card {...{ title: 'Air Polution' }} />
      <video playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  )
}

export default MainContent
