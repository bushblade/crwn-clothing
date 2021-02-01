import React from 'react'
import { Link } from 'react-router-dom'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { useGoogleUser } from '../../firebase/hooks'

function Header() {
  const currentUser = useGoogleUser()
  return (
    <div className='header'>
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
      </div>
    </div>
  )
}

export default Header
