import { SET_ENVIROMENT_INFO } from '../types'
import axios from 'axios'

interface enviromentInfo {
  weather: {
    tp: string
    pr: string
    hu: string
    ws: string
    wd: string
  }
  pollution: {
    aqius: string
    aqicn: string
  }
}

const setEnviromentInfo = (enviromentInfo: enviromentInfo) => {
  return {
    type: SET_ENVIROMENT_INFO,
    payload: enviromentInfo,
  }
}

export default function fetchEnviromentInfo(url: string) {
  return async (dispatch: any) => {
    axios
      .get(url)
      .then((response) => response.data.data)
      .then((data) => dispatch(setEnviromentInfo(data)))
      .catch((error) => console.log('Max requests limit\n', error))
  }
}
