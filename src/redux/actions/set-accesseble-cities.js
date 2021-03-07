import { CHANGE_ACCESSABLE_CITIES } from '../types'
import axios from 'axios'

const setAccessableCities = (listOfCities) => {
  return {
    type: CHANGE_ACCESSABLE_CITIES,
    payload: listOfCities,
  }
}

export default function fetchEnviromentInfo(url) {
  return async (dispatch) => {
    if (url) {
      axios
        .get(url)
        .then((response) => response.data.data)
        .then((data) => dispatch(setAccessableCities(data)))
        .catch((error) => console.log('Max requests limit\n', error))
    } else {
      dispatch(setAccessableCities([]))
    }
  }
}
