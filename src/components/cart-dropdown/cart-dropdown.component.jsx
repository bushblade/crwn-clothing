import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CartItem from '../cart-item.component'
import { Link } from 'react-router-dom'
import { ButtonStyles } from '../custom-button/custom-button.component'

const StyledLink = styled(Link)`
  ${ButtonStyles}
`

function CartDropdown({ className }) {
  const dropDownRef = useRef(null)
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)

  useEffect(() => {
    dropDownRef.current.focus()
  }, [])
  return (
    <div
      className={className}
      ref={dropDownRef}
      tabIndex='0'
      onBlur={(e) => {
        dispatch(toggleCartHidden())
      }}
    >
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-message'>No items in the cart</span>
        )}
      </div>
      <StyledLink
        to='/checkout'
        onMouseDown={(e) => {
          // prevent default triggering blur
          e.preventDefault()
        }}
        onClick={() => dispatch(toggleCartHidden())}
      >
        GO TO CHECKOUT
      </StyledLink>
    </div>
  )
}

export default styled(CartDropdown)`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  button {
    margin-top: auto;
  }

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }
`
