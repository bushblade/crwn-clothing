import React from 'react'
import styled from 'styled-components/macro'

function Category({ match }) {
  console.log(match.params.categoryId)
  return (
    <div>
      <h2>Category Page</h2>
    </div>
  )
}

export default styled(Category)``
