import React from 'react'
import styled from 'styled-components/macro'
import CustomButton from '../custom-button/custom-button.component'

function CartDropdown({ className }) {
  return (
    <div className={className}>
      <div className='cart-items'></div>
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
    overflow: scroll;
  }

  button {
    margin-top: auto;
  }
`
