// Initialize and configure database
const { sequelize, Campaign } = require('../database/models')

const getCampaign = async function (id) {
  return Campaign.findOne({
    where: {
      id: id,
    },
  })
}

const createCampaign = async function (name) {
  return Campaign.create({
    name: name,
  })
}

const updateCampaign = async function (id, name) {
  const campaign = await getCampaign(id)
  return campaign.update({ name: name })
}

const deleteCampaign = async function (id) {
  const campaign = await getCampaign(id)
  return campaign.destroy()
}

module.exports = {
  getCampaign,
  createCampaign,
  updateCampaign,
  deleteCampaign,
}
