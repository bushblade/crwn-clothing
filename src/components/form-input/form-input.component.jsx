import React from 'react'
import styled from 'styled-components/macro'

function FormInput({ className, handleChange, label, ...rest }) {
  return (
    <div className={className}>
      <input className='form-input' onChange={handleChange} {...rest} />
      {label ? (
        <label
          className={`${rest.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default styled(FormInput)`
  --sub-color: grey;
  --main-color: black;

  position: relative;
  margin: 45px 0;

  .form-input {
    background: none;
    background-color: white;
    color: $sub-color;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid var(--sub-color);
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ .form-input-label {
      transform: translateY(-28px) scale(0.9);
      color: var(--main-color);
    }
  }

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  .form-input-label {
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: transform 300ms ease;

    &.shrink {
      transform: translateY(-28px) scale(0.9);
      color: var(----main-color);
    }
  }
`
