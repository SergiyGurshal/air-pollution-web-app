import React, { useEffect, useState } from 'react'

import DropDown from '../dropdown/DropDown'

import './header.css'
import logo from '../../images/logo/logo.svg'

const isMobile = () => {
  if (window.screen.width < 950) return true
  return false
}

const Header = () => {
  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

  const [curCountry, setCurCountry] = useState('')
  const [curState, setCurState] = useState('')
  const [curCity, setCurCity] = useState('')

  useEffect(() => {
    fetch('https://api.airvisual.com/v2/countries?key=f2a437c2-fbc6-4858-b197-05eb662afb20')
      .then((response) => response.text())
      .then((obj) => JSON.parse(obj).data)
      .then((data) => setCountries(data))
      .catch((error) => console.log('error', error))
  }, [])

  const getStates = (country) => {
    fetch(`https://api.airvisual.com/v2/states?country=${country}&key=f2a437c2-fbc6-4858-b197-05eb662afb20`)
      .then((response) => response.text())
      .then((obj) => JSON.parse(obj).data)
      .then((data) => setStates(data))
      .catch((error) => console.log('error', error))
  }

  const getCities = (country, state) => {
    fetch(`https://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=f2a437c2-fbc6-4858-b197-05eb662afb20`)
      .then((response) => response.text())
      .then((obj) => JSON.parse(obj).data)
      .then((data) => setCities(data))
      .catch((error) => {
        console.log('error', error)
        setCities([])
      })
  }

  useEffect(() => {
    if (curCountry) getStates(curCountry)
    setStates([])
    setCities([])
    setCurState('')
    setCurCity('')
    document.getElementsByClassName('container__title')[1].textContent = 'Select...'
    document.getElementsByClassName('container__title')[2].textContent = 'Select...'
  }, [curCountry])

  useEffect(() => {
    if (curState) getCities(curCountry, curState)
    setCities([])
    setCurCity('')
    document.getElementsByClassName('container__title')[2].textContent = 'Select...'
  }, [curState])

  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} alt="logo" className="header__logo" />
        {isMobile() && <h1 className="header__title">AirMonitor</h1>}
      </div>
      <div className="header__dropdowns">
        <DropDown {...{ title: 'Country: ', items: countries, changePosition: setCurCountry }} />
        <DropDown {...{ title: 'State: ', items: states, changePosition: setCurState }} />
        <DropDown {...{ title: 'City: ', items: cities, changePosition: setCurCity }} />
      </div>
    </header>
  )
}

export default Header
