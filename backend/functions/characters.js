// Initialize and configure database
const { sequelize, Character } = require('../database/models')

const getCharacter = async function (id) {
  // FIXME use uuid instead of id for obscurity
  return Character.findOne({
    where: {
      id: id,
    },
  })
}

const getCharacters = async function () {
  return Character.findAll()
}

const createCharacter = async function (data) {
  return Character.create({
    name: data.name,
    class: data.class,
    species: data.species,
    vocation: data.vocation,
    experiencePoints: data.experiencePoints,
    attributes: data.attributes,
  })
}

const updateCharacter = async function (id, data) {
  const character = await getCharacter(id)
  return character.update({ data })
}

const deleteCharacter = async function (id) {
  const character = await getCharacter(id)
  return character.destroy()
}

module.exports = {
  getCharacter,
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
}
