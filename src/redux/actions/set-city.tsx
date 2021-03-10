import { CHANGE_CITY } from '../types'

export default function setCity(selectedCity: string) {
  return {
    type: CHANGE_CITY,
    payload: selectedCity,
  }
}
