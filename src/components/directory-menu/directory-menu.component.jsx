import React from 'react'
import styled from 'styled-components/macro'

import MenuItem from '../../components/menu-item/menu-item.component'

const sections = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'hats',
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: '',
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: '',
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
    linkUrl: '',
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5,
    linkUrl: '',
  },
]

const DirectoryMenu = ({ className }) => {
  return (
    <div className={className}>
      {sections.map(({ id, ...restSectionProps }) => (
        <MenuItem key={id} {...restSectionProps} />
      ))}
    </div>
  )
}

export default styled(DirectoryMenu)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
