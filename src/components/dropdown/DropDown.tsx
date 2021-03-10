import React, { useState, useRef, useEffect, FC, MouseEvent } from 'react'
import { connect } from 'react-redux'
import setAccessableCountries from '../../redux/actions/set-accesseble-countries'
import setAccessableStates from '../../redux/actions/set-accesseble-states'
import setAccessableCities from '../../redux/actions/set-accesseble-cities'
import setCountry from '../../redux/actions/set-country'
import setState from '../../redux/actions/set-state'
import setCity from '../../redux/actions/set-city'

const css = require('./dropdown.css')

const DROPDOWN_PLACEHOLDER = 'Select...'

interface location {
  country: string
  state: string
  city: string
}

interface accessableLocations {
  countries?: {
    country: string
  }[]
  states?: {
    state: string
  }[]
  cities?: {
    city: string
  }[]
  message?: string
}

interface DropDownProps {
  title: string
  type: string
  setAccessableCities: any
  setAccessableStates: any
  setAccessableCountries: any
  setCity: any
  setState: any
  setCountry: any
  location: location
  accessableLocations: accessableLocations
}

const DropDown: FC<DropDownProps> = (props) => {
  const { title, type } = props
  const { setAccessableCities, setAccessableStates, setAccessableCountries } = props
  const { setCity, setState, setCountry } = props
  const { location, accessableLocations } = props

  const getAccessibleLocations = () => {
    switch (type) {
      case 'country':
        return accessableLocations.countries
      case 'state':
        return accessableLocations.states
      case 'city':
        return accessableLocations.cities
    }
  }

  const [open, setOpen] = useState(false)
  const [accesibleLocations, setAccesibleLocations] = useState(getAccessibleLocations())
  const dropdownWrapper = useRef(document.createElement('div'))

  useEffect(() => {
    if (type === 'country') {
      setAccessableCountries('https://api.airvisual.com/v2/countries?key=f2a437c2-fbc6-4858-b197-05eb662afb20')
    }

    document.addEventListener('mousedown', onOutsideClick)
    return () => {
      document.removeEventListener('mousedown', onOutsideClick)
    }
  }, [])

  const openDropdownHandler = () => {
    if (dropdownWrapper?.current?.parentElement?.style.zIndex) {
      const dropdown = dropdownWrapper.current.parentElement
      open ? (dropdown.style.zIndex = '999') : (dropdown.style.zIndex = '10000')
    }
  }

  const onOutsideClick = (e: any) => {
    if (!dropdownWrapper.current.contains(e.target)) {
      dropdownWrapper.current.style.zIndex = '999'
      setOpen(false)
    }
  }

  const onItemSelectHandler = async (e: any) => {
    setOpen(false)
    switch (type) {
      case 'country':
        await setCountry(e.target.textContent)
        await setAccessableStates(
          `https://api.airvisual.com/v2/states?country=${e.target.textContent}&key=f2a437c2-fbc6-4858-b197-05eb662afb20`
        )
        await setAccessableCities(null)
        await setState(DROPDOWN_PLACEHOLDER)
        setCity(DROPDOWN_PLACEHOLDER)
        break
      case 'state':
        await setState(e.target.textContent)
        await setAccessableCities(
          `https://api.airvisual.com/v2/cities?state=${e.target.textContent}&country=${location.country}&key=f2a437c2-fbc6-4858-b197-05eb662afb20`
        )
        setCity(DROPDOWN_PLACEHOLDER)
        break
      case 'city':
        setCity(e.target.textContent)
        break
    }
  }

  const getSelectedValue = () => {
    switch (type) {
      case 'country':
        return location.country
      case 'state':
        return location.state
      case 'city':
        return location.city
    }
  }

  useEffect(() => {
    setAccesibleLocations(getAccessibleLocations)
  }, [accessableLocations])

  return (
    <div className="dropdown">
      <h3 className="dropdown__lable unselectable">{title}</h3>
      <div className="dropdown__wrapper" ref={dropdownWrapper} onClick={openDropdownHandler}>
        <div className="dropdown__container" onClick={() => setOpen(!open)}>
          <p className="container__title unselectable">{getSelectedValue()}</p>
          <p className={open ? 'container__arrow--rotated unselectable' : 'container__arrow unselectable'}>&#9660;</p>
        </div>
        {open && (
          <ul className="dropdown__list">
            {!accessableLocations.message && accesibleLocations ? (
              accesibleLocations.map((location: any, index: number) => (
                <li key={index} className="list__item unselectable" onClick={onItemSelectHandler}>
                  {location[Object.keys(location)[0]]}
                </li>
              ))
            ) : (
              <li className="list__item unselectable">No items found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

const getStateToProps = ({
  location,
  accessableLocations,
}: {
  location: location
  accessableLocations: accessableLocations
}) => ({ location, accessableLocations })

const mapDispatchToProps = (dispatch: any) => {
  return {
    setAccessableCities: (url: string) => dispatch(setAccessableCities(url)),
    setAccessableStates: (url: string) => dispatch(setAccessableStates(url)),
    setAccessableCountries: (url: string) => dispatch(setAccessableCountries(url)),
    setCity: (city: string) => dispatch(setCity(city)),
    setState: (state: string) => dispatch(setState(state)),
    setCountry: (country: string) => dispatch(setCountry(country)),
  }
}

export default connect(getStateToProps, mapDispatchToProps)(DropDown)
