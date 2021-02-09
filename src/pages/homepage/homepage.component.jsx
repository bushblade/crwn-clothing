import React from 'react'
import styled from 'styled-components/macro'

import DirectoryMenu from '../../components/directory-menu/directory-menu.component'

const HomePage = ({ className }) => {
  return (
    <div className={className}>
      <DirectoryMenu />
    </div>
  )
}

export default styled(HomePage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`
