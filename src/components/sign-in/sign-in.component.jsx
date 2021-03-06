import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import { auth } from '../../firebase/firebase.utils'
import styled from 'styled-components/macro'

function SignIn({ className }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    const { email, password } = formData
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setFormData({ email: '', password: '' })
      })
      .catch(console.error)
  }

  function handleChange({ target: { name, value } }) {
    setFormData({ ...formData, [name]: value })
  }

  const { email, password } = formData
  return (
    <div className={className}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          value={email}
          required
          handleChange={handleChange}
          label='email'
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          required
          handleChange={handleChange}
          label='password'
        />
        <div className='buttons'>
          <CustomButton type='submit' value='Submit Form'>
            Sign In
          </CustomButton>
          <CustomButton
            isGoogleSignIn
            value='Submit Form'
            onClick={signInWithGoogle}
            type='button'
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default styled(SignIn)`
  width: 380px;
  display: flex;
  flex-direction: column;
  .title {
    margin: 10px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
`
