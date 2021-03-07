import { SET_ENVIROMENT_INFO } from '../types'

const PLACEHOLDER = 'loading...'

const initialState = {
  current: {
    weather: {
      tp: PLACEHOLDER,
      pr: PLACEHOLDER,
      hu: PLACEHOLDER,
      ws: PLACEHOLDER,
      wd: PLACEHOLDER,
    },
    pollution: {
      aqius: PLACEHOLDER,
      aqicn: PLACEHOLDER,
    },
  },
}

export default function enviromentInfo(state = initialState, action) {
  if (action.type === SET_ENVIROMENT_INFO) {
    return action.payload
  } else {
    return state
  }
}
