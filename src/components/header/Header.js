import React, { useEffect, useState } from 'react'
import DropDown from '../dropdown/DropDown'

import './header.css'
import logo from '../../images/logo/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-container">
        <img src={logo} alt="logo" className="header__logo" />
        <h1 className="header__title">AirMonitor</h1>
      </div>
      <div className="header__dropdowns">
        <DropDown
          {...{
            title: 'Country: ',
            type: 'country',
          }}
        />
        <DropDown
          {...{
            title: 'State: ',
            type: 'state',
          }}
        />
        <DropDown
          {...{
            title: 'City: ',
            type: 'city',
          }}
        />
      </div>
    </header>
  )
}

export default Header
