import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions'

function CheckoutItem({ className, cartItem }) {
  const { imageUrl, name, quantity, price, id } = cartItem
  const dispatch = useDispatch()
  return (
    <div className={className}>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <div className='quantity'>
        <button className='arrow' onClick={() => dispatch(removeItem(id))}>
          &#10094;
        </button>
        <span className='value'>{quantity}</span>
        <button className='arrow' onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </button>
      </div>
      <span className='price'>{price}</span>
      <button
        className='remove-button'
        onClick={() => dispatch(clearItemFromCart(id))}
      >
        &#10005;
      </button>
    </div>
  )
}

export default styled(CheckoutItem)`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    text-align: center;
  }

  .remove-button,
  .arrow {
    padding: 4px;
    cursor: pointer;
    background: none;
    display: inline-block;
    font-size: inherit;
    text-align: center;
    border: none;
    outline: none;
  }
`
