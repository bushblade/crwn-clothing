import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import CollectionItem from '../../components/collection-item/collection-item.component'

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
}

function CollectionPage({ match, className }) {
  const { title, items } = useSelector((state) =>
    state.shop.collections.find(
      (collection) =>
        collection.id === COLLECTION_ID_MAP[match.params.collectionId]
    )
  )
  return (
    <div className={className}>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default styled(CollectionPage)`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 38px;
    margin: 0 auto 30px;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & .collection-item {
      margin-bottom: 30px;
    }
  }
`
