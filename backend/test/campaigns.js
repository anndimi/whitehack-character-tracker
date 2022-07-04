const assert = require('chai').assert
const { dropAndSync, populateLevels } = require('../database/helpers')
const { Campaign } = require('../database/models')
const {
  createCampaign,
  getCampaign,
  updateCampaign,
  deleteCampaign,
} = require('../functions/campaigns')

describe('Campaign functions', () => {
  beforeEach(async () => {
    await dropAndSync()
    await populateLevels()
  })

  after(async () => {
    await dropAndSync()
    await populateLevels()
  })

  describe('createCampaign()', () => {
    it('should return campaign if valid data', async () => {
      await createCampaign('test').then(
        (result) => {
          assert.instanceOf(result, Campaign)
        },
        (reason) => {
          assert.fail()
        }
      )
    })
  })

  describe('getCampaign()', () => {
    it('should return null if no matching campaign', async () => {
      await getCampaign('abc').then(
        (result) => {
          assert.isNull(result)
        },
        (reason) => {
          assert.fail()
        }
      )
    })

    it('should return campaign if matching', async () => {
      await createCampaign('test')
        .then(
          (result) => {
            return result.getDataValue('id')
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (campaignId) => {
            return getCampaign(campaignId)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.instanceOf(result, Campaign)
            assert.strictEqual(result.getDataValue('name'), 'test')
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })

  describe('updateCampaign()', () => {
    it('should change name after update', async () => {
      await createCampaign('test')
        .then(
          (result) => {
            return result.getDataValue('id')
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (campaignId) => {
            return updateCampaign(campaignId, 'new name')
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.instanceOf(result, Campaign)
            assert.strictEqual(result.getDataValue('name'), 'new name')
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })

  describe('deleteCampaign()', () => {
    it('should be removed after delete', async () => {
      const campaignId = await createCampaign('test').then(
        (result) => {
          return result.getDataValue('id')
        },
        (reason) => {
          assert.fail()
        }
      )

      await deleteCampaign(campaignId)
        .then(
          (result) => {
            assert.instanceOf(result, Campaign)
            assert.strictEqual(result.getDataValue('name'), 'test')
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            return getCampaign(campaignId)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.isNull(result)
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })
})
