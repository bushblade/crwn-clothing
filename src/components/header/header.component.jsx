import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const userSelector = (state) => state.user.currentUser
const hiddenSelector = (state) => state.cart.hidden

function Header({ className }) {
  const currentUser = useSelector(userSelector)
  const hidden = useSelector(hiddenSelector)
  return (
    <nav className={className}>
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
      {!hidden ? <CartDropdown /> : null}
    </nav>
  )
}

export default styled(Header)`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logo-container {
    height: 100%;
    width: 70px;
    padding: 25px;
  }

  .options {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .option {
      padding: 10px 15px;
      cursor: pointer;
    }
  }
`
