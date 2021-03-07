import { CHANGE_COUNTRY, CHANGE_STATE, CHANGE_CITY } from '../types'

const PLACEHOLDER = 'Select...'

const initialState = {
  country: PLACEHOLDER,
  state: PLACEHOLDER,
  city: PLACEHOLDER,
}

export default function location(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COUNTRY:
      return { ...state, country: action.payload }
    case CHANGE_STATE:
      return { ...state, state: action.payload }
    case CHANGE_CITY:
      return { ...state, city: action.payload }
    default:
      return state
  }
}
