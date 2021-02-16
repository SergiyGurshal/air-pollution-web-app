import React from 'react'

import DropDown from '../dropdown/DropDown'

import './header.css'
import logo from '../../images/logo/logo.svg'

const Header = () => {
  const isMobile = () => {
    //will return if screen size is smaller then x
    return false
  }

  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      {isMobile() && <h1 className="header__title">AirMonitor</h1>}
      <div className="header__dropdowns">
        <DropDown {...{ title: 'Country' }} />
        <DropDown {...{ title: 'State' }} />
        <DropDown {...{ title: 'City' }} />
      </div>
    </header>
  )
}

export default Header
