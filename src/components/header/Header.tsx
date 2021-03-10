import React, { FC } from 'react'
import DropDown from '../dropdown/DropDown'

import logo from '../../images/logo/logo.svg'

const css = require('./header.css')

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container">
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
