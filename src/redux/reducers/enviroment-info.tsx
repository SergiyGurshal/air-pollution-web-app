import { SET_ENVIROMENT_INFO } from '../types'

const PLACEHOLDER = 'loading...'

interface action {
  type: string
  payload: {
    current: {
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
  }
}

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

export default function enviromentInfo(state = initialState, action: action) {
  if (action.type === SET_ENVIROMENT_INFO) {
    return action.payload
  } else {
    return state
  }
}
