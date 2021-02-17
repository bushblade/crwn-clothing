import React from 'react'
import styled from 'styled-components/macro'

function CheckoutItem({
  className,
  cartItem: { imageUrl, name, quantity, price },
}) {
  return (
    <div className={className}>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <button className='remove-button'>&#10005;</button>
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

  .remove-button {
    padding: 0;
    cursor: pointer;
    background: none;
    display: inline-block;
    font-size: inherit;
    text-align: center;
    border: none;
    outline: none;
  }
`
