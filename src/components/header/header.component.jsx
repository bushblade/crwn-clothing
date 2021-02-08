import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'

function Header() {
  const currentUser = useSelector((state) => state.user.currentUser)
  return (
    <nav className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <a href='#!' className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </a>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
    </nav>
  )
}

export default Header
