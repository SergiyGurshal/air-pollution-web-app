import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import fetchEnviromentInfo from '../../redux/actions/set-enviroment-info'
import Card from '../card/Card'

const backgroundVideo = require('../../images/background_video/water_wave_2.mp4')

const css = require('./main-content.css')

interface Ilocation {
  country: string
  state: string
  city: string
}

const MainContent = ({ location, fetchEnviromentInfo }: { location: Ilocation; fetchEnviromentInfo: any }) => {
  useEffect(() => {
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
      <Card {...{ title: 'Air Pollution' }} />
      <video playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  )
}

const getStateToProps = (state: any) => ({ location: state.location })

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchEnviromentInfo: (url: string) => dispatch(fetchEnviromentInfo(url)),
  }
}

export default connect(getStateToProps, mapDispatchToProps)(MainContent)
