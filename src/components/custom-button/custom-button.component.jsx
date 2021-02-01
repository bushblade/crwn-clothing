import React from 'react'
import './custom-button.styles.scss'

function CustomButton({ children, isGoogleSignIn, ...rest }) {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : null} custom-button`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default CustomButton
