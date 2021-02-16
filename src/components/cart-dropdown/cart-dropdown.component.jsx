import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item.component'

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
      onBlur={() => {
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
      <CustomButton>GO TO CHECKOUT</CustomButton>
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
