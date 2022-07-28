import React, { useState } from 'react'
import crossIcon from '../assets/icons/cross-icon.png'
import closeIcon from '../assets/icons/close-icon.png'
import {
  ClassWrapper,
  ClassContainer,
  ScoreGroupsContainer,
  AttributesContainer,
  ModalContainer,
  ModalWrapper,
  ModalHeader,
  CloseButton,
  ModalBody,
  Form,
  ModalButtonWrapper,
  LabelHeader,
} from '../styles/modal'

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
    experiencePoints: '',
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
        experiencePoints: e.target[20].value,
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
              <LabelHeader htmlFor="name">Name </LabelHeader>
              <input type="text" name="name" required></input>
            </div>

            <div>
              <LabelHeader htmlFor="species">Species </LabelHeader>
              <input type="text" name="species" required></input>
            </div>

            <ClassWrapper>
              <fieldset>
                <legend>Class</legend>
                <ClassContainer>
                  <label htmlFor="strong">
                    Strong
                    <input
                      type="radio"
                      name="class"
                      id="strong"
                      value="Strong"
                      required
                    />
                    <span></span>
                  </label>

                  <label htmlFor="deft">
                    Deft
                    <input
                      type="radio"
                      name="class"
                      id="deft"
                      value="Deft"
                      required
                    />
                    <span></span>
                  </label>

                  <label htmlFor="wise">
                    Wise
                    <input
                      type="radio"
                      name="class"
                      id="wise"
                      value="Wise"
                      required
                    />
                    <span></span>
                  </label>
                </ClassContainer>
              </fieldset>
            </ClassWrapper>

            <div>
              <LabelHeader htmlFor="vocation">Vocation </LabelHeader>
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

            <div>
              <h4>Experience Points</h4>
              <label htmlFor="experiencePoints"></label>
              <input type="number" min="0" name="experiencePoints" />
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
