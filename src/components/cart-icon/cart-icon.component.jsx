import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const quantityReducer = (acc, { quantity }) => acc + quantity

const cartItemsSelector = (state) => state.cart.cartItems

function CartIcon({ className }) {
  const cartItems = useSelector(cartItemsSelector)
  const totalItems = cartItems.reduce(quantityReducer, 0)
  const dispatch = useDispatch()

  return (
    <div
      className={className}
      onClick={() => {
        dispatch(toggleCartHidden())
      }}
      onMouseDown={(e) => {
        // prevent triggering blur
        e.preventDefault()
      }}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalItems}</span>
    </div>
  )
}

export default styled(CartIcon)`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`
