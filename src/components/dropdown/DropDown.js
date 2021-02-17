import React, { useState, useRef, useEffect } from 'react'

import './dropdown.css'

const DropDown = ({ title, items, changePosition }) => {
  const [open, setOpen] = useState(false)

  const dropdown = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  const handleClick = (e) => {
    if (!dropdown.current.contains(e.target)) {
      setOpen(false)
    }
  }

  const openDropdown = () => {
    setOpen(!open)
  }

  const onItemSelectHandler = (e) => {
    const listItem = e.target
    const dropdownWrapper = listItem.closest('.dropdown__wrapper')
    const dropdownContainer = dropdownWrapper.getElementsByClassName('dropdown__container')[0]
    const containerTitle = dropdownContainer.getElementsByClassName('container__title')[0]

    containerTitle.textContent = listItem.textContent

    setOpen(false)
    changePosition(e.target.textContent)
  }

  return (
    <div className="dropdown">
      <h3 className="dropdown__lable unselectable">{title}</h3>
      <div className="dropdown__wrapper" ref={dropdown}>
        <div className="dropdown__container" onClick={openDropdown}>
          <p className="container__title unselectable">Select...</p>
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
