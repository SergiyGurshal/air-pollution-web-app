import { CHANGE_COUNTRY } from '../types'

export default function setCountry(selectedCountry: string) {
  return {
    type: CHANGE_COUNTRY,
    payload: selectedCountry,
  }
}
