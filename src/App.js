import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SingInAndSignUp from './pages/sign-in&sign-up/sign-in&sign-up'
import { useCurrentUser } from './firebase/hooks'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

function App() {
  const currentUser = useCurrentUser()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentUser(currentUser))
  }, [currentUser, dispatch])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SingInAndSignUp />
          }
        />
      </Switch>
    </div>
  )
}

export default App
