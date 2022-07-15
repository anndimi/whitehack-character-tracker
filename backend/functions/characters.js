// Initialize and configure database
const { sequelize, Character, Campaign } = require('../database/models')

const getCharacter = async function (id) {
  return Character.findOne({
    where: {
      id: id,
    },
  })
}

const getCharactersByCampaign = async function (campaignName) {
  const campaignId = await Campaign.findOne({
    where: { name: campaignName },
  }).then((campaign) => {
    return campaign.getDataValue('id')
  })

  return Character.findAll({
    where: {
      CampaignId: campaignId,
    },
  })
}

const createCharacter = async function (data) {
  console.log('create', data)

  const campaignId = await Campaign.findOne({
    where: { name: data.campaignName },
  }).then((campaign) => {
    return campaign.getDataValue('id')
  })

  return Character.create({
    CampaignId: campaignId,
    name: data.name,
    class: data.class,
    species: data.species,
    vocation: data.vocation,
    experiencePoints: data.experiencePoints,
    attributes: data.attributes,
    background: data.background,
    level: data.level,
  })
}

const updateCharacter = async function (id, data) {
  const character = await getCharacter(id)
  return character.update(data)
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
