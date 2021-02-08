import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './root-reducer'

const initialState = {}
// const middleware = []

const store = createStore(rootReducer, initialState, composeWithDevTools())

export default store
