import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import styled from 'styled-components/macro'

function CollectionPreview({ title, items, className }) {
  return (
    <div className={className}>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items.slice(0, 4).map(({ id, ...rest }) => (
          <CollectionItem key={id} {...rest} />
        ))}
      </div>
    </div>
  )
}

export default styled(CollectionPreview)`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }
`
