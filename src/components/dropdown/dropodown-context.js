import React, { useState, useContext } from 'react'

const DROPDOWN_PLACEHOLDER = 'Select...'

const DropdownContext = React.createContext()

export const useDropdown = () => {
  return useContext(DropdownContext)
}

export const DropdownProvider = ({ children }) => {
  const [curCountry, setCurCountry] = useState(DROPDOWN_PLACEHOLDER)
  const [curState, setCurState] = useState(DROPDOWN_PLACEHOLDER)
  const [curCity, setCurCity] = useState(DROPDOWN_PLACEHOLDER)

  return (
    <DropdownContext.Provider value={{ curCountry, curState, curCity, setCurCountry, setCurState, setCurCity }}>
      {children}
    </DropdownContext.Provider>
  )
}
