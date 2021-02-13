import React from 'react'
import styled from 'styled-components/macro'
import CustomButton from '../custom-button/custom-button.component'
import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

function CollectionItem({ className, item }) {
  const dispatch = useDispatch()
  return (
    <div className={className}>
      <div
        className='image'
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.price}</span>
      </div>
      <CustomButton
        collectionButton
        inverted
        className='custom-button'
        onClick={() => dispatch(addItem(item))}
      >
        Add to cart
      </CustomButton>
    </div>
  )
}

export default styled(CollectionItem)`
  width: 22%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }

  .custom-button {
    display: none;
  }
  &:hover {
    .image {
      opacity: 0.8;
    }
    .custom-button {
      display: block;
    }
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }
`
