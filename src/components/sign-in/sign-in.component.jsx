import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'
import { signinWithGoogle } from '../../firebase/firebase.utils'

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    setFormData({ email: '', password: '' })
  }

  function handleChange({ target: { name, value } }) {
    setFormData({ ...formData, [name]: value })
  }

  const { email, password } = formData
  return (
    <div className='sign-in'>
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
        <CustomButton type='submit' value='Submit Form'>
          Sign In
        </CustomButton>
        <CustomButton value='Submit Form' onClick={signinWithGoogle}>
          Sign In With Google
        </CustomButton>
      </form>
    </div>
  )
}

export default SignIn
