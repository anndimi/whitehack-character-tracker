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

  const characterIds = await Character.findAll({
    where: { CampaignId: campaignId },
  }).then((characters) => {
    return characters.map((character) => {
      return character.id
    })
  })
  return Journal.findAll({ where: { characterId: { [Op.or]: characterIds } } })
}

const createJournal = async function (data) {
  return Journal.create({
    CampaignId: data.campaignId,
    CharacterId: data.characterId,
    body: data.body,
    signature: data.signature,
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
