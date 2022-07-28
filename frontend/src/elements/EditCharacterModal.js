import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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
} from '../styles/modal'

const EditCharacterModal = (props) => {
  const { id } = useParams()

  const [editCharacter, setEditCharacter] = useState({
    name: props.name,
    species: props.species,
    class: props.class,
    vocation: props.vocation,
    attributes: {
      str: {
        score: props.str,
        groups: [],
      },
      dex: {
        score: props.dex,
        groups: [],
      },
      con: {
        score: props.con,
        groups: [],
      },
      int: {
        score: props.int,
        groups: [],
      },
      wis: {
        score: props.wis,
        groups: [],
      },
      cha: {
        score: props.cha,
        groups: [],
      },
    },
    background: props.background,
    experiencePoints: props.experiencePoints,
  })

  const handleChange = (e) => {
    const value = e.target.value

    if (['str', 'dex', 'con', 'int', 'wis', 'cha'].includes(e.target.name)) {
      let currentAttributes = editCharacter.attributes
      let targetAttributeKey = e.target.name
      currentAttributes[targetAttributeKey].score = e.target.value
      let updatedCharacter = { ...editCharacter, attributes: currentAttributes }
      setEditCharacter(updatedCharacter)
    } else {
      setEditCharacter({ ...editCharacter, [e.target.name]: value })
    }
  }

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
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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

    fetch(`http://localhost:8080/characters/${id}`, options)
      .then((res) => res.json())
      .then((data) => setEditCharacter(data))
      .then(() => console.log(editCharacter))

    props.onClose()
    window.location.reload()
  }

  if (!props.showModal) {
    document.body.style.overflow = 'visible'
    return null
  }
  document.body.style.overflow = 'hidden'

  return (
    <ModalContainer onClick={props.onClose}>
      <ModalWrapper onClick={(event) => event.stopPropagation()}>
        <ModalHeader>
          <h3>Edit hero</h3>
          <CloseButton onClick={props.onClose}>
            <img src={closeIcon} alt="Close" />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name">Name </label>
              <input
                type="text"
                name="name"
                value={editCharacter.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="species">Species </label>
              <input
                type="text"
                name="species"
                value={editCharacter.species}
                onChange={handleChange}
              ></input>
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
                      onChange={handleChange}
                      defaultChecked={props.class === 'Strong' ? true : false}
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
                      onChange={handleChange}
                      defaultChecked={props.class === 'Deft' ? true : false}
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
                      onChange={handleChange}
                      defaultChecked={props.class === 'Wise' ? true : false}
                      required
                    />
                    <span></span>
                  </label>
                </ClassContainer>
              </fieldset>
            </ClassWrapper>

            <div>
              <label htmlFor="vocation">Vocation </label>
              <input
                type="text"
                name="vocation"
                value={editCharacter.vocation}
                onChange={handleChange}
              ></input>
            </div>
            <ScoreGroupsContainer>
              <h4>Attributes</h4>
              <h4>Groups</h4>
            </ScoreGroupsContainer>
            <AttributesContainer>
              <label htmlFor="str">
                Str
                <input
                  type="text"
                  name="str"
                  value={editCharacter.attributes.str.score}
                  onChange={handleChange}
                />
                <input type="text" name="str" />
              </label>

              <label htmlFor="dex">
                Dex
                <input
                  type="text"
                  name="dex"
                  value={editCharacter.attributes.dex.score}
                  onChange={handleChange}
                />
                <input type="text" name="dex" />
              </label>

              <label htmlFor="con">
                Con
                <input
                  type="text"
                  name="con"
                  value={editCharacter.attributes.con.score}
                  onChange={handleChange}
                />
                <input type="text" name="con" />
              </label>

              <label htmlFor="int">
                Int
                <input
                  type="text"
                  name="int"
                  value={editCharacter.attributes.int.score}
                  onChange={handleChange}
                />
                <input type="text" name="int" />
              </label>

              <label htmlFor="wis">
                Wis
                <input
                  type="text"
                  name="wis"
                  value={editCharacter.attributes.wis.score}
                  onChange={handleChange}
                />
                <input type="text" name="wis" />
              </label>

              <label htmlFor="cha">
                Cha
                <input
                  type="text"
                  name="cha"
                  value={editCharacter.attributes.cha.score}
                  onChange={handleChange}
                />
                <input type="text" name="cha" />
              </label>
            </AttributesContainer>

            <div>
              <h4>Hero Background</h4>
              <label htmlFor="background"> </label>
              <textarea
                type="text"
                name="background"
                value={editCharacter.background}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <h4>Experience Points</h4>
              <label htmlFor="experiencePoints"></label>
              <input
                type="number"
                min="0"
                name="experiencePoints"
                value={editCharacter.experiencePoints}
                onChange={handleChange}
              />
            </div>

            <ModalButtonWrapper>
              <button type="submit">
                <img src={crossIcon} alt="submit hero changes" />
              </button>
            </ModalButtonWrapper>
          </Form>
        </ModalBody>
      </ModalWrapper>
    </ModalContainer>
  )
}

export default EditCharacterModal
