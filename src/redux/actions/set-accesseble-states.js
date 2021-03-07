import { CHANGE_ACCESSABLE_STATES } from '../types'
import axios from 'axios'

const setAccessableStates = (listOfStates) => {
  return {
    type: CHANGE_ACCESSABLE_STATES,
    payload: listOfStates,
  }
}

export default function fetchEnviromentInfo(url) {
  return async (dispatch) => {
    if (url) {
      axios
        .get(url)
        .then((response) => response.data.data)
        .then((data) => dispatch(setAccessableStates(data)))
        .catch((error) => console.log('Max requests limit\n', error))
    } else {
      dispatch(setAccessableStates([]))
    }
  }
}
