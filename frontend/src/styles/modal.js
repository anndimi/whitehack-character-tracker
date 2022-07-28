import styled from 'styled-components'

export const LabelHeader = styled.label`
  font-weight: bold;
  line-height: 40px;
`

export const ClassWrapper = styled.div`
  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }
  legend {
    font-weight: bold;
  }
`

export const ClassContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 5px;
  label {
    display: inline-flex;
    align-items: center;
  }
  input[type='radio'] {
    position: relative;
    height: 25px;
    width: 25px;
    opacity: 0;
    cursor: pointer;
    &:checked ~ span:after {
      display: block;
    }
  }
  span {
    position: relative;
    height: 25px;
    width: 25px;
    left: -20%;
    cursor: pointer;
    background-color: rgb(221, 208, 193);
    border: 3px double #393939;
    display: inline-block;
    :after {
      content: 'x';
      position: relative;
      font-family: 'Splash', cursive;
      color: #393939;
      font-size: 70px;
      line-height: 5px;
      display: none;
    }
  }
`

export const ScoreGroupsContainer = styled.div`
  display: flex;
  gap: 65px;
`

export const AttributesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  label {
    display: inline-grid;
    align-items: baseline;
    grid-template-columns: 40px 15% 120%;
    column-gap: 20px;
  }
  input {
    width: 55% !important;
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #05030399;
  z-index: 9999;
`

export const ModalWrapper = styled.div`
  width: 600px;
  height: 90%;
  background-color: rgb(221, 208, 193);
  border-radius: 2px;
  z-index: 9999;
  overflow-y: scroll;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  h3 {
    font-size: 30px;
    font-family: 'MedievalSharp', cursive;
    padding-left: 40px;
  }
`

export const CloseButton = styled.button`
  width: 50px !important;
  margin: 0 !important;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  img {
    width: 30px;
    vertical-align: middle;
    :hover {
      transform: scale(1.09);
    }
    :active {
      transform: scale(1);
    }
  }
`

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px 0 15px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  gap: 12px;
  font-size: 20px;
  input {
    width: 100%;
    height: 28px;
    font-size: 20px;
    border: 1px solid rgb(221, 208, 193);
    border-bottom: 1px dotted #393939;
    background-color: transparent;
    font-family: inherit;
    color: #393939;
    :focus {
      border: 1px solid rgb(221, 208, 193);
      outline-offset: 0px !important;
      outline: none !important;
      border-bottom: 1px dotted #393939;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px rgb(221, 208, 193) inset !important;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  textarea {
    resize: none;
    width: 100%;
    height: 300px;
    border: 3px double #393939;
    font-family: inherit;
    color: #393939;
    font-size: 18px;
    background-color: transparent;
    :focus {
      border: 3px double #393939;
      outline-offset: 0px !important;
      outline: none !important;
    }
  }
`

export const ModalButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  align-self: center;
  padding: 20px 15px 20px 15px;
  button {
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
  }

  img {
    :hover {
      transform: scale(1.09);
    }
    :active {
      transform: scale(1);
    }
  }
`
