import { CHANGE_ACCESSABLE_COUNTRIES } from '../types'
import axios from 'axios'

const setAccessableCountries = (listOfCountries) => {
  return {
    type: CHANGE_ACCESSABLE_COUNTRIES,
    payload: listOfCountries,
  }
}

export default function fetchEnviromentInfo(url) {
  return async (dispatch) => {
    axios
      .get(url)
      .then((response) => response.data.data)
      .then((data) => dispatch(setAccessableCountries(data)))
      .catch((error) => console.log('Max requests limit\n', error))
  }
}
