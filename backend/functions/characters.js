// Initialize and configure database
const { sequelize, Character } = require('../database/models')

const getCharacter = async function (id) {
  return Character.findOne({
    where: {
      id: id,
    },
  })
}

const getCharactersByCampaign = async function (campaignId) {
  return Character.findAll({
    where: {
      campaignId: campaignId,
    },
  })
}

const createCharacter = async function (campaignId, data) {
  return Character.create({
    CampaignId: campaignId,
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
  getCharactersByCampaign,
  createCharacter,
  updateCharacter,
  deleteCharacter,
}
