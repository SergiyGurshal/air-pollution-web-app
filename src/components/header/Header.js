import React, { useEffect, useState } from 'react'

import DropDown from '../dropdown/DropDown'

import './header.css'
import logo from '../../images/logo/logo.svg'
import { useDropdown } from '../dropdown/dropodown-context'

const DROPDOWN_PLACEHOLDER = 'Select...'

const isScreenSizeMobile = () => {
  if (window.screen.width < 950) return true
  return false
}

const Header = () => {
  const dropdownContext = useDropdown()

  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

  useEffect(() => {
    fetch('https://api.airvisual.com/v2/countries?key=f2a437c2-fbc6-4858-b197-05eb662afb20')
      .then((response) => response.text())
      .then((obj) => JSON.parse(obj).data)
      .then((data) => setCountries(data))
      .catch((error) => console.log('error', error))
  }, [])

  const getStates = () => {
    fetch(`https://api.airvisual.com/v2/states?country=${dropdownContext.curCountry}&key=f2a437c2-fbc6-4858-b197-05eb662afb20`)
      .then((response) => response.text())
      .then((obj) => JSON.parse(obj).data)
      .then((data) => setStates(data))
      .catch((error) => console.log('error', error))
  }

  const getCities = () => {
    fetch(
      `https://api.airvisual.com/v2/cities?state=${dropdownContext.curState}&country=${dropdownContext.curCountry}&key=f2a437c2-fbc6-4858-b197-05eb662afb20`
    )
      .then((response) => response.text())
      .then((obj) => JSON.parse(obj).data)
      .then((data) => setCities(data))
      .catch((error) => console.log('error', error))
  }

  useEffect(() => {
    if (dropdownContext.curCountry !== DROPDOWN_PLACEHOLDER) getStates(dropdownContext.curCountry)
    setStates([])
    setCities([])
    dropdownContext.setCurState(DROPDOWN_PLACEHOLDER)
    dropdownContext.setCurCity(DROPDOWN_PLACEHOLDER)
  }, [dropdownContext.curCountry])

  useEffect(() => {
    if (dropdownContext.curState !== DROPDOWN_PLACEHOLDER) {
      getCities()
    } else {
      dropdownContext.setCurCity([])
      dropdownContext.setCurCity(DROPDOWN_PLACEHOLDER)
    }
  }, [dropdownContext.curState])

  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} alt="logo" className="header__logo" />
        {isScreenSizeMobile() && <h1 className="header__title">AirMonitor</h1>}
      </div>
      <div className="header__dropdowns">
        <DropDown
          {...{
            title: 'Country: ',
            items: countries,
            type: 'country',
          }}
        />
        <DropDown
          {...{
            title: 'State: ',
            items: states,
            type: 'state',
          }}
        />
        <DropDown
          {...{
            title: 'City: ',
            items: cities,
            type: 'city',
          }}
        />
      </div>
    </header>
  )
}

export default Header
