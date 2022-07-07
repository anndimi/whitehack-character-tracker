const { Op } = require('sequelize')
const {
  sequelize,
  Journal,
  Character,
  Campaign,
} = require('../database/models')

const getJournal = async function (id) {
  return Journal.findOne({
    where: {
      id: id,
    },
  })
}

const getJournalsByCharacter = async function (characterId) {
  return Journal.findAll({ where: { CharacterId: characterId } })
}

const getJournalsByCampaign = async function (campaignName) {
  const campaignId = await Campaign.findOne({
    where: { name: campaignName },
  }).then((campaign) => {
    return campaign.getDataValue('id')
  })
  console.log(campaignId)

  return Journal.findAll({ where: { CampaignId: campaignId } })
}

const createJournal = async function (data) {
  const campaignId = await Campaign.findOne({
    where: { name: data.campaignName },
  }).then((campaign) => {
    return campaign.getDataValue('id')
  })

  const characterId = await Character.findOne({
    where: { name: data.characterName },
  }).then((character) => {
    return character.getDataValue('id')
  })

  return Journal.create({
    CampaignId: campaignId,
    CharacterId: characterId,
    body: data.body,
    signature: data.characterName,
  })
}

const updateJournal = async function (id, data) {
  const journal = await getJournal(id)
  return journal.update({ data })
}

const deleteJournal = async function (id) {
  const journal = await getJournal(id)
  return journal.destroy()
}

module.exports = {
  getJournal,
  getJournalsByCharacter,
  getJournalsByCampaign,
  createJournal,
  updateJournal,
  deleteJournal,
}
