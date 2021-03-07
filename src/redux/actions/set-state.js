import { CHANGE_STATE } from '../types'

export default function setState(selectedState) {
  return {
    type: CHANGE_STATE,
    payload: selectedState,
  }
}
