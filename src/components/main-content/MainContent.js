import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchEnviromentInfo from '../../redux/actions/set-enviroment-info'
import Card from '../card/Card'

import backgroundVideo from '../../images/background_video/water_wave_2.mp4'

import './main-content.css'

const MainContent = ({ location, fetchEnviromentInfo }) => {
  useEffect(() => {
    console.log(location.city)
    if (location.city === 'Select...') {
      fetchEnviromentInfo('https://api.airvisual.com/v2/nearest_city?key=f2a437c2-fbc6-4858-b197-05eb662afb20')
    } else {
      fetchEnviromentInfo(
        `https://api.airvisual.com/v2/city?city=${location.city}&state=${location.state}&country=${location.country}&key=f2a437c2-fbc6-4858-b197-05eb662afb20`
      )
    }
  }, [location.city])

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

const getStateToProps = (state) => ({ location: state.location })

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEnviromentInfo: (url) => dispatch(fetchEnviromentInfo(url)),
  }
}

export default connect(getStateToProps, mapDispatchToProps)(MainContent)
