import React from 'react'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { useSelector } from 'react-redux'

function ShopPage() {
  const collections = useSelector((state) => state.shop.collections)
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
