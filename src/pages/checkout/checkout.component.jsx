import React from 'react'
import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

function CheckoutPage({ className }) {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )
  return (
    <div className={className}>
      <div className='checkout-header'>
        <div className='header-bloc'>
          <span>Product</span>
        </div>
        <div className='header-bloc'>
          <span>Description</span>
        </div>
        <div className='header-bloc'>
          <span>Quantity</span>
        </div>
        <div className='header-bloc'>
          <span>Price</span>
        </div>
        <div className='header-bloc'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className='total'>
        <span>Total: ${cartTotal}</span>
      </div>
    </div>
  )
}

export default styled(CheckoutPage)`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  .checkout-header {
    width: 100%;
    padding: 10px 0;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(5, 1fr);
    border-bottom: 1px solid darkgrey;

    .header-block {
      text-transform: capitalize;
      width: 23%;

      &:last-child {
        width: 8%;
      }
    }
  }

  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
`
