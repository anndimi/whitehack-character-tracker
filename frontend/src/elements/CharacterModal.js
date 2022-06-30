import React from 'react'
import styled from 'styled-components'
import modalBg from '../assets/images/modal.jpg'

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
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" placeholder="heroic name"></input>
            </div>

            <div>
              <label htmlFor="species">Species: </label>
              <input
                type="text"
                name="name"
                placeholder="heroic species"
              ></input>
            </div>

            <div>
              <label htmlFor="class">Class: </label>
              <input
                type="text"
                name="class"
                placeholder="heroic class"
              ></input>
            </div>

            <div>
              <label htmlFor="Vocation">Vocation: </label>
              <input
                type="text"
                name="vocation"
                placeholder="heroic vocation"
              ></input>
            </div>

            <ModalButtonWrapper>
              <button type="submit">Add hero</button>
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
  text-align: center;
  h3 {
    font-family: 'MedievalSharp', cursive;
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
  gap: 10px;
  font-size: 15px;
  input {
    border: 1px solid transparent;
    border-bottom: 1px dotted black;
    background-color: transparent;
  }
`

const ModalButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  align-self: center;
  padding: 20px 15px 20px 15px;
  margin-top: 10px;
`
