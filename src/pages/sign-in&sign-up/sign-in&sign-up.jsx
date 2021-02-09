import React from 'react'
import styled from 'styled-components/macro'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SingInAndSignUP = ({ className }) => {
  return (
    <div className={className}>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default styled(SingInAndSignUP)`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`
