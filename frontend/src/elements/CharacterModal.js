import React, { useState } from 'react'
import styled from 'styled-components'
import crossIcon from '../assets/icons/cross-icon.png'
import closeIcon from '../assets/icons/close-icon.png'

const CharacterModal = ({ onClose, showModal, campaignName }) => {
  const [newCharacter, setNewCharacter] = useState({
    campaignName: campaignName,
    name: '',
    species: '',
    class: '',
    vocation: '',
    attributes: {
      str: {
        score: '',
        groups: [],
      },
      dex: {
        score: '',
        groups: [],
      },
      con: {
        score: '',
        groups: [],
      },
      int: {
        score: '',
        groups: [],
      },
      wis: {
        score: '',
        groups: [],
      },
      cha: {
        score: '',
        groups: [],
      },
    },
    background: '',
  })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(e)

    let selectedClassIndex

    for (let i = 3; i < 6; i++) {
      if (e.target[i].checked) {
        selectedClassIndex = i
      }
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        campaignName: campaignName,
        name: e.target[0].value,
        species: e.target[1].value,
        class: e.target[selectedClassIndex].value,
        vocation: e.target[6].value,
        attributes: {
          str: {
            score: e.target[7].value,
            groups: [e.target[8].value],
          },
          dex: {
            score: e.target[9].value,
            groups: [e.target[10].value],
          },
          con: {
            score: e.target[11].value,
            groups: [e.target[12].value],
          },
          int: {
            score: e.target[13].value,
            groups: [e.target[14].value],
          },
          wis: {
            score: e.target[15].value,
            groups: [e.target[16].value],
          },
          cha: {
            score: e.target[17].value,
            groups: [e.target[18].value],
          },
        },
        background: e.target[19].value,
      }),
    }

    fetch('http://localhost:8080/characters', options)
      .then((res) => res.json())
      .then((data) => setNewCharacter(data))
      .then(() => console.log(newCharacter))

    onClose()
    window.location.reload()
  }

  if (!showModal) {
    document.body.style.overflow = 'visible'
    return null
  }
  document.body.style.overflow = 'hidden'

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
              <input type="text" name="name" required></input>
            </div>

            <div>
              <label htmlFor="species">Species </label>
              <input type="text" name="species" required></input>
            </div>

            <ClassWrapper>
              <fieldset>
                <legend>Class</legend>
                <ClassContainer>
                  <label htmlFor="strong">Strong</label>
                  <input
                    type="radio"
                    name="class"
                    id="strong"
                    value="Strong"
                    required
                  />

                  <label htmlFor="deft">Deft</label>
                  <input
                    type="radio"
                    name="class"
                    id="deft"
                    value="Deft"
                    required
                  />

                  <label htmlFor="wise">Wise</label>
                  <input
                    type="radio"
                    name="class"
                    id="wise"
                    value="Wise"
                    required
                  />
                </ClassContainer>
              </fieldset>
            </ClassWrapper>

            <div>
              <label htmlFor="vocation">Vocation </label>
              <input type="text" name="vocation" required></input>
            </div>
            <ScoreGroupsContainer>
              <h4>Attributes</h4>
              <h4>Groups</h4>
            </ScoreGroupsContainer>
            <AttributesContainer>
              <label htmlFor="str">
                Str
                <input type="text" name="str" required />
                <input type="text" name="str" />
              </label>

              <label htmlFor="dex">
                Dex
                <input type="text" name="dex" required />
                <input type="text" name="dex" />
              </label>

              <label htmlFor="con">
                Con
                <input type="text" name="con" required />
                <input type="text" name="con" />
              </label>

              <label htmlFor="int">
                Int
                <input type="text" name="int" required />
                <input type="text" name="int" />
              </label>

              <label htmlFor="wis">
                Wis
                <input type="text" name="wis" required />
                <input type="text" name="wis" />
              </label>

              <label htmlFor="cha">
                Cha
                <input type="text" name="cha" required />
                <input type="text" name="cha" />
              </label>
            </AttributesContainer>

            <div>
              <h4>Hero Background</h4>
              <label htmlFor="background"> </label>
              <textarea type="text" name="background"></textarea>
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

const ClassWrapper = styled.div`
  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }
`

const ClassContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 5px;
  input[type='radio'] {
    margin: 0;
    height: 20px;
    width: 20px;
  }
`

const ScoreGroupsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const AttributesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input {
    width: 25% !important;
  }
`

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
  height: 90%;
  background-color: rgb(221, 208, 193);
  border-radius: 2px;
  z-index: 9999;
  overflow-y: scroll;
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
  input[type='text'] {
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

const ModalButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  align-self: center;
  padding: 20px 15px 20px 15px;
  img {
    :hover {
      transform: scale(1.09);
    }
    :active {
      transform: scale(1);
    }
  }
`
