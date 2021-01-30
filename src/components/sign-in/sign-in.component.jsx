import React, { useState } from 'react'

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
        <input
          type='email'
          name='email'
          value={email}
          required
          onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='password'
          name='password'
          value={password}
          required
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input type='submit' value='Submit Form' />
      </form>
    </div>
  )
}

export default SignIn
