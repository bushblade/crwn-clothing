import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './root-reducer'

const initialState = {
  cart: {
    cartItems: localStorage.cartItems ? JSON.parse(localStorage.cartItems) : [],
    hidden: true,
  },
}
// const middleware = []

const store = createStore(rootReducer, initialState, composeWithDevTools())

let currentState = store.getState()

// subscribe to the store to watch for changes in the cartItems
store.subscribe(() => {
  console.log('subscription running')
  // keep track of the previous and current state to compare changes
  let previousState = currentState
  currentState = store.getState()

  // store in local storage whenever cartItems changes
  const cartsMatch = previousState.cart.cartItems.every(
    (item, index) => item === currentState.cart.cartItems[index]
  )
  console.log('carts match', cartsMatch)
  if (!cartsMatch) {
    console.log('cart items changed')
    localStorage.setItem(
      'cartItems',
      JSON.stringify(currentState.cart.cartItems)
    )
  }
})

export default store
