import styled, { css } from 'styled-components/macro'

const CustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  ${(props) =>
    props.isGoogleSignIn
      ? css`
          background-color: #4285f4;
          color: white;
          &:hover {
            background-color: #357ae8;
            border: none;
          }
        `
      : null}
  ${(props) =>
    props.inverted
      ? css`
          background-color: white;
          color: black;
          border: 1px solid black;
          &:hover {
            background-color: black;
            color: white;
            border: none;
          }
        `
      : null}
  ${(props) =>
    props.collectionButton
      ? css`
          width: 80%;
          opacity: 0.7;
          position: absolute;
          top: 255px;
          &:hover {
            opacity: 1;
          }
        `
      : null}
`

export default CustomButton
