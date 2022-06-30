import React from 'react'
import styled from 'styled-components'

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
          <form onSubmit={handleFormSubmit}>
            <input type="text"></input>
            <div>
              <button type="submit">Add hero</button>
            </div>
          </form>
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
  background: rgba(0, 0, 0, 0.5);
`

const ModalWrapper = styled.div`
  width: 500px;
  height: fit-content;
  background-color: #ffffff;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 10px 0px 10px;
`

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 15px 0 15px;
`
