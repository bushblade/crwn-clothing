import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'

import cartReducer from './cart/cart-reducer'
import userReducer from './user/user-reducer'

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whitelist: ['cart'],
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
})

export default persistReducer(persistConfig, rootReducer)
