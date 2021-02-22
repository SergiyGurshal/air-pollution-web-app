import React, { useState, useRef, useEffect } from 'react'

import './dropdown.css'
import { useDropdown } from './dropodown-context'

const DropDown = ({ title, items, type }) => {
  const [open, setOpen] = useState(false)

  const dropdown = useRef()
  const dropdownContext = useDropdown()

  useEffect(() => {
    document.addEventListener('mousedown', onOutsideClick)
    return () => {
      document.removeEventListener('mousedown', onOutsideClick)
    }
  }, [])

  const onOutsideClick = (e) => {
    if (!dropdown.current.contains(e.target)) {
      setOpen(false)
    }
  }

  const onItemSelectHandler = (e) => {
    setOpen(false)
    switch (type) {
      case 'country':
        dropdownContext.setCurCountry(e.target.textContent)
        break
      case 'state':
        dropdownContext.setCurState(e.target.textContent)
        break
      case 'city':
        dropdownContext.setCurCity(e.target.textContent)
        break
    }
  }

  const getSelectedValue = () => {
    switch (type) {
      case 'country':
        return dropdownContext.curCountry
      case 'state':
        return dropdownContext.curState
      case 'city':
        return dropdownContext.curCity
    }
  }

  return (
    <div className="dropdown">
      <h3 className="dropdown__lable unselectable">{title}</h3>
      <div className="dropdown__wrapper" ref={dropdown}>
        <div className="dropdown__container" onClick={() => setOpen(!open)}>
          <p className="container__title unselectable">{getSelectedValue()}</p>
          <p className={open ? 'container__arrow--rotated unselectable' : 'container__arrow unselectable'}>&#9660;</p>
        </div>
        {open && (
          <ul className="dropdown__list">
            {!items.message ? (
              items.map((item, index) => (
                <li key={index} className="list__item unselectable" onClick={onItemSelectHandler}>
                  {item[Object.keys(item)[0]]}
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

export default DropDown
