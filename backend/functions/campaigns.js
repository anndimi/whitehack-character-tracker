// Initialize and configure database
const { sequelize, Campaign } = require('../database/models')

const getCampaign = async function (name) {
  return Campaign.findOne({
    where: {
      name: name,
    },
  })
}

const createCampaign = async function (name) {
  return Campaign.create({
    name: name,
  })
}

const updateCampaign = async function (name) {
  const campaign = await getCampaign(name)
  return campaign.update({ name: name })
}

const deleteCampaign = async function (name) {
  const campaign = await getCampaign(name)
  return campaign.destroy()
}

module.exports = {
  getCampaign,
  createCampaign,
  updateCampaign,
  deleteCampaign,
}
