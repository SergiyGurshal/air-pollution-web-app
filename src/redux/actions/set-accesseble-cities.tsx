import { CHANGE_ACCESSABLE_CITIES } from '../types'
import axios from 'axios'

const setAccessableCities = (listOfCities: string[]) => {
  return {
    type: CHANGE_ACCESSABLE_CITIES,
    payload: listOfCities,
  }
}

export default function fetchEnviromentInfo(url: string) {
  return async (dispatch: any) => {
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
