import { CHANGE_ACCESSABLE_COUNTRIES } from '../types'
import axios from 'axios'

const setAccessableCountries = (listOfCountries: string[]) => {
  return {
    type: CHANGE_ACCESSABLE_COUNTRIES,
    payload: listOfCountries,
  }
}

export default function fetchEnviromentInfo(url: string) {
  return async (dispatch: any) => {
    axios
      .get(url)
      .then((response) => response.data.data)
      .then((data) => dispatch(setAccessableCountries(data)))
      .catch((error) => console.log('Max requests limit\n', error))
  }
}
