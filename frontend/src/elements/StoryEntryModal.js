import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import crossIcon from '../assets/icons/cross-icon.png'
import closeIcon from '../assets/icons/close-icon.png'

const StoryEntryModal = ({ onClose, showModal, campaignName, characters }) => {
  const [newJournalEntry, setNewJournalEntry] = useState({
    campaignName: campaignName,
    characterName: '',
    body: '',
  })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(e)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        campaignName: campaignName,
        characterName: e.target[1].value,
        body: e.target[0].value,
      }),
    }

    fetch('http://localhost:8080/journals', options)
      .then((res) => res.json())
      .then((data) => setNewJournalEntry(data))
      .then(() => console.log(newJournalEntry))

    onClose()
    window.location.reload()
  }

  if (!showModal) {
    return null
  }

  return (
    <ModalContainer onClick={onClose}>
      <ModalWrapper onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <h3>New entry</h3>
          <CloseButton onClick={onClose}>
            <img src={closeIcon} alt="Close" />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="entry"> </label>
              <textarea type="text" name="entry" required></textarea>
            </div>
            <div>
              <label htmlFor="signature">Signed </label>
              <select name="signature" required>
                {characters.map((character) => (
                  <option value={character.name} key={character.id}>
                    {character.name}
                  </option>
                ))}
              </select>
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

export default StoryEntryModal

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
  z-index: 9999;
`

const ModalWrapper = styled.div`
  width: 500px;
  height: fit-content;
  background-color: rgb(221, 208, 193);
  border-radius: 2px;
  z-index: 9999;
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
  border: none;
  background-color: transparent;
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
  textarea {
    resize: none;
    width: 100%;
    height: 400px;
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
const ModalButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  align-self: center;
  padding: 20px 15px 20px 15px;
  margin-top: 10px;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  border: none;
  background-color: transparent;
  cursor: pointer;
  img {
    :hover {
      transform: scale(1.09);
    }
    :active {
      transform: scale(1);
    }
  }
`
