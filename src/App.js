import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SingInAndSignUP from './pages/sign-in&sign-up/sign-in&sign-up'
import { useCurrentUser } from './firebase/hooks'

function App() {
  const currentUser = useCurrentUser()
  console.log(currentUser)

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SingInAndSignUP} />
      </Switch>
    </div>
  )
}

export default App
