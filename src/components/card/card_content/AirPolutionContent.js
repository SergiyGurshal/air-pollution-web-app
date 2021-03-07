import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import loadingGif from '../../../images/loading.svg'

import './card-content.css'

const AirPolutionContent = ({ pollutionInfo }) => {
  const [image, setImage] = useState(loadingGif)
  const [title, setTitle] = useState('loading...')
  const [AQIUS, setAQIUS] = useState('loading...')
  const [AQICN, setAQICN] = useState('loading...')

  const cardContent = useRef(null)

  const setBoxShadowGetIcon = (pollutionLevel) => {
    let cardStyles = cardContent.current.parentElement.style
    switch (true) {
      case pollutionLevel < 51:
        cardStyles.boxShadow = `0 4px 8px 0 rgba(96, 118, 49, 0.2), 0 6px 20px 0 rgba(96, 118, 49, 0.19)`
        setImage(require(`../../../images/face_icons/ic-face-green.svg`).default)
        setTitle('Good')
        break
      case pollutionLevel < 101:
        cardStyles.boxShadow = `0 4px 8px 0 rgba(140, 108, 29, 0.2), 0 6px 20px 0 rgba(140, 108, 29, 0.19)`
        setImage(require(`../../../images/face_icons/ic-face-yellow.svg`).default)
        setTitle('Moderate')
        break
      case pollutionLevel < 151:
        cardStyles.boxShadow = `0 4px 8px 0 rgba(151, 74, 32, 0.2), 0 6px 20px 0 rgba(151, 74, 32, 0.19)`
        setImage(require(`../../../images/face_icons/ic-face-orange.svg`).default)
        setTitle('Unhealthy for Sensitive Groups')
        break
      case pollutionLevel < 201:
        cardStyles.boxShadow = `0 4px 8px 0 rgba(148, 36, 49, 0.2), 0 6px 20px 0 rgba(148, 36, 49, 0.19)`
        setImage(require(`../../../images/face_icons/ic-face-red.svg`).default)
        setTitle('Unhealthy')
        break
      case pollutionLevel < 301:
        cardStyles.boxShadow = `0 4px 8px 0 rgba(93, 69, 107, 0.2), 0 6px 20px 0 rgba(93, 69, 107, 0.19)`
        setImage(require(`../../../images/face_icons/ic-face-purple.svg`).default)
        setTitle('Very Unhealthy')
        break
      default:
        cardStyles.boxShadow = `0 4px 8px 0 rgba(87, 51, 68, 0.2), 0 6px 20px 0 rgba(87, 51, 68, 0.19)`
        setImage(require(`../../../images/face_icons/ic-face-maroon.svg`).default)
        setTitle('Hazardous')
        break
    }
  }

  const setPolutionInfo = (data) => {
    setAQIUS(data.aqius)
    setAQICN(data.aqicn)
    setBoxShadowGetIcon(pollutionInfo.aqius)
  }

  useEffect(() => {
    setPolutionInfo(pollutionInfo)
  }, [pollutionInfo])

  return (
    <div className="card__content" ref={cardContent}>
      <img src={image} className="content__icon" />
      <p className="content__title">{title}</p>
      <div className="content__aditional-info">
        <p className="aditional-info__text">{`AQI value based on US EPA standard: ${AQIUS}`}</p>
        <p className="aditional-info__text">{`AQI value based on China MEP standard: ${AQICN}`} </p>
      </div>
    </div>
  )
}

const getStateToProps = (state) => ({ pollutionInfo: state.enviromentInfo.current.pollution })

export default connect(getStateToProps)(AirPolutionContent)
