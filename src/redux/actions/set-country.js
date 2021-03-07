import { CHANGE_COUNTRY } from '../types'

export default function setCountry(selectedCountry) {
  return {
    type: CHANGE_COUNTRY,
    payload: selectedCountry,
  }
}
