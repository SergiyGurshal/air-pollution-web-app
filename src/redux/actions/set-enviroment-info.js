import { SET_ENVIROMENT_INFO } from '../types'
import axios from 'axios'

const setEnviromentInfo = (enviromentInfo) => {
  return {
    type: SET_ENVIROMENT_INFO,
    payload: enviromentInfo,
  }
}

export default function fetchEnviromentInfo(url) {
  return async (dispatch) => {
    axios
      .get(url)
      .then((response) => response.data.data)
      .then((data) => dispatch(setEnviromentInfo(data)))
      .catch((error) => console.log('Max requests limit\n', error))
  }
}
