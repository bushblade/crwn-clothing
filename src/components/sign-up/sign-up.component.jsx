import React, { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {
  auth,
  checkAndCreateUserProfileDocument,
} from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

function SignUp() {
  const [formData, setFormData] = useState(initialState)

  const { displayName, email, password, confirmPassword } = formData

  const onChange = ({ target: { value, name } }) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      // add the users displayName
      await user.updateProfile({
        displayName,
      })

      checkAndCreateUserProfileDocument(user)
      setFormData(initialState)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmit} className='sign-up-form'>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={onChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={onChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp
