import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionsOverview = ({ className }) => {
  const collections = useSelector((state) => state.shop.collections)
  return (
    <div className={className}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default styled(CollectionsOverview)`
  display: flex;
  flex-direction: column;
`
