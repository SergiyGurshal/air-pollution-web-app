import React, { useEffect, useRef, useState } from 'react'
import { useDropdown } from '../../dropdown/dropodown-context'

import './card-content.css'

const AirPolutionContent = () => {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [AQIUS, setAQIUS] = useState(null)
  const [AQICN, setAQICN] = useState(null)

  const cardContent = useRef(null)
  const dropdownContext = useDropdown()

  const getPolutionByCurrentIP = () => {
    fetch('https://api.airvisual.com/v2/nearest_city?key=f2a437c2-fbc6-4858-b197-05eb662afb20')
      .then((response) => response.text())
      .then((obj) => JSON.parse(obj).data)
      .then((data) => {
        setAQIUS(data.current.pollution.aqius)
        setAQICN(data.current.pollution.aqicn)
        setBoxShadowGetIcon(data.current.pollution.aqius)
      })
      .catch((error) => console.log('error', error))
  }

  const getPolutionByLocation = () => {
    fetch(
      `https://api.airvisual.com/v2/city?city=${dropdownContext.curCity}&state=${dropdownContext.curState}&country=${dropdownContext.curCountry}&key=f2a437c2-fbc6-4858-b197-05eb662afb20`
    )
      .then((response) => response.text())
      .then((obj) => JSON.parse(obj).data)
      .then((data) => {
        setAQIUS(data.current.pollution.aqius)
        setAQICN(data.current.pollution.aqicn)
        setBoxShadowGetIcon(data.current.pollution.aqius)
      })
      .catch((error) => console.log('error', error))
  }

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

  useEffect(() => {
    getPolutionByCurrentIP()
  }, [])

  useEffect(() => {
    if (dropdownContext.curCity === 'Select...') {
      getPolutionByCurrentIP()
    } else {
      getPolutionByLocation()
    }
  }, [dropdownContext.curCity])

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

export default AirPolutionContent
