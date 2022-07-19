import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import crossIcon from '../assets/icons/cross-icon.png'
import closeIcon from '../assets/icons/close-icon.png'

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

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target[0].value,
        species: e.target[1].value,
        class: e.target[2].value,
        vocation: e.target[3].value,
        attributes: {
          str: {
            score: e.target[4].value,
            groups: [e.target[5].value],
          },
          dex: {
            score: e.target[6].value,
            groups: [e.target[7].value],
          },
          con: {
            score: e.target[8].value,
            groups: [e.target[9].value],
          },
          int: {
            score: e.target[10].value,
            groups: [e.target[11].value],
          },
          wis: {
            score: e.target[12].value,
            groups: [e.target[13].value],
          },
          cha: {
            score: e.target[14].value,
            groups: [e.target[15].value],
          },
        },
        background: e.target[16].value,
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
    return null
  }

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

            <div>
              <label htmlFor="class">Class </label>
              <input
                type="text"
                name="class"
                value={editCharacter.class}
                onChange={handleChange}
              ></input>
            </div>

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

export default EditCharacterModal

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
  overflow: scroll;
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
`

const ModalButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  align-self: center;
  padding: 20px 15px 20px 15px;
  margin-top: 10px;
  button {
    cursor: pointer;
    background: transparent;
    border: 1px solid transparent;
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
