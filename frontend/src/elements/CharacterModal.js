import React from 'react'
import styled from 'styled-components'
import crossIcon from '../assets/icons/cross-icon.png'
import closeIcon from '../assets/icons/close-icon.png'

const CharacterModal = ({ onClose, showModal }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault()

    onClose()
  }

  if (!showModal) {
    return null
  }

  return (
    <ModalContainer onClick={onClose}>
      <ModalWrapper onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <h3>Add new hero</h3>
          <CloseButton onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name">Name </label>
              <input type="text" name="name"></input>
            </div>

            <div>
              <label htmlFor="species">Species </label>
              <input type="text" name="name"></input>
            </div>

            <div>
              <label htmlFor="class">Class </label>
              <input type="text" name="class"></input>
            </div>

            <div>
              <label htmlFor="Vocation">Vocation </label>
              <input type="text" name="vocation"></input>
            </div>

            <ModalButtonWrapper>
              <button type="submit">
                <img src={crossIcon} alt="add hero" />
              </button>
            </ModalButtonWrapper>
          </Form>
        </ModalBody>
      </ModalWrapper>
    </ModalContainer>
  )
}

export default CharacterModal

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #05030399;
`

const ModalWrapper = styled.div`
  width: 500px;
  height: fit-content;
  background-color: rgb(221, 208, 193);
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  h3 {
    font-size: 24px;
    font-family: 'MedievalSharp', cursive;
    padding-left: 40px;
  }
`

const CloseButton = styled.button`
    width: 50px !important;
    margin: 0 !important;
    img {
      width: 30px;
      vertical-align: middle;
      :hover {
        transform: scale(1.09);
      }
    }
  }
`

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px 0 15px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  gap: 12px;
  font-size: 18px;
  input {
    width: 100%;
    height: 28px;
    font-size: 20px;
    border: 1px solid transparent;
    border-bottom: 1px dotted black;
    background-color: transparent;
    font-family: inherit;
    color: #393939;
    :focus {
      border: 1px solid transparent;
      outline-offset: 0px !important;
      outline: none !important;
      border-bottom: 1px dotted black;
    }
  }
`

const ModalButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  align-self: center;
  padding: 20px 15px 20px 15px;
  margin-top: 10px;
  img {
    :hover {
      transform: scale(1.09);
    }
  }
`
