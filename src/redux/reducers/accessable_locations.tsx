import { CHANGE_ACCESSABLE_COUNTRIES, CHANGE_ACCESSABLE_STATES, CHANGE_ACCESSABLE_CITIES } from '../types'

interface action {
  type: string
  payload: {
    countries?: string
    states?: string
    cities?: string
  }
}

const initialState = {
  countries: [],
  states: [],
  cities: [],
}

export default function accessableLocations(state = initialState, action: action) {
  switch (action.type) {
    case CHANGE_ACCESSABLE_COUNTRIES:
      return { ...state, countries: action.payload }
    case CHANGE_ACCESSABLE_STATES:
      return { ...state, states: action.payload }
    case CHANGE_ACCESSABLE_CITIES:
      return { ...state, cities: action.payload }
    default:
      return state
  }
}
