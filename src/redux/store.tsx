import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import location from './reducers/location'
import enviromentInfo from './reducers/enviroment-info'
import accessableLocations from './reducers/accessable_locations'

const reduser = combineReducers({ location, enviromentInfo, accessableLocations })

const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)))

export default store
