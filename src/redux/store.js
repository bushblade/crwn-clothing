import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer'

const initialState = {}
// const middleware = []

const store = createStore(rootReducer, initialState, composeWithDevTools())

export const persistor = persistStore(store)

export default store
