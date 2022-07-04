const assert = require('chai').assert
const { dropAndSync, populateLevels } = require('../database/helpers')
const { Journal } = require('../database/models')
const { createCharacter } = require('../functions/characters')
const { createCampaign } = require('../functions/campaigns')
const {
  getJournal,
  getJournals,
  getJournalsByCharacter,
  getJournalsByCampaign,
  createJournal,
  updateJournal,
  deleteJournal,
} = require('../functions/journals')

const _characterData = {
  name: 'Kindled Ash',
  class: 'Wise',
  species: 'Dwarf',
  vocation: 'Blood Priest',
  experiencePoints: 0,
  attributes: {
    str: {
      score: 5,
      groups: ['Dwarf'],
    },
    dex: {
      score: 10,
      groups: [],
    },
    con: {
      score: 12,
      groups: ['Blood Priest'],
    },
    int: {
      score: 14,
      groups: ['Order of the Candle'],
    },
    wis: {
      score: 12,
      groups: ['Dwarf'],
    },
    cha: {
      score: 5,
      groups: [],
    },
  },
}

const _journalData = {
  title: 'This is a title',
  body: 'And this is a body which is, needless to say, longer than the title',
}

const _journalDataUpdated = {
  title: 'This is an updated title',
  body: 'And this is an updated body which is, needless to say, longer than the title',
}

async function intializeCampaignAndCharacter() {
  let campaignId = await createCampaign('test').then(
    (result) => {
      return result.getDataValue('id')
    },
    (reason) => {
      assert.fail()
    }
  )

  let characterId = await createCharacter(campaignId, _characterData).then(
    (result) => {
      return result.getDataValue('id')
    },
    (reason) => {
      assert.fail()
    }
  )

  return {
    campaignId: campaignId,
    characterId: characterId,
  }
}

describe('Journal functions', () => {
  beforeEach(async () => {
    await dropAndSync()
    await populateLevels()
  })

  after(async () => {
    await dropAndSync()
    await populateLevels()
  })

  describe('createJournal()', () => {
    it('should return journal if valid data', async () => {
      const preData = await intializeCampaignAndCharacter()
      const campaignId = preData.campaignId
      const characterId = preData.characterId

      let _data = structuredClone(_journalData)
      _data.campaignId = campaignId
      _data.characterId = characterId
      await createJournal(_data).then(
        (result) => {
          assert.instanceOf(result, Journal)
        },
        (reason) => {
          assert.fail()
        }
      )
    })
  })

  describe('getJournal()', () => {
    it('should return null if no matching journal', async () => {
      await getJournal('abc').then(
        (result) => {
          assert.isNull(result)
        },
        (reason) => {
          assert.fail()
        }
      )
    })

    it('should return journal if matching', async () => {
      const preData = await intializeCampaignAndCharacter()

      let _data = structuredClone(_journalData)
      _data.campaignId = preData.campaignId
      _data.characterId = preData.characterId
      await createJournal(_data)
        .then(
          (result) => {
            return getJournal(result.getDataValue('id'))
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.instanceOf(result, Journal)
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })

  describe('getJournalsByCharacter()', () => {
    it('should return empty array if no matching character', async () => {
      await getJournalsByCharacter('abc').then(
        (result) => {
          assert.deepEqual(result, [])
        },
        (reason) => {
          assert.fail()
        }
      )
    })

    it('should return empty array if character has no journals', async () => {
      const preData = await intializeCampaignAndCharacter()

      await getJournalsByCharacter(preData.characterId).then(
        (result) => {
          assert.deepEqual(result, [])
        },
        (reason) => {
          assert.fail()
        }
      )
    })

    it('should return journals if matching', async () => {
      const preData = await intializeCampaignAndCharacter()

      let _data = structuredClone(_journalData)
      _data.campaignId = preData.campaignId
      _data.characterId = preData.characterId

      await createJournal(_data)
        .then(
          (result) => {
            return getJournalsByCharacter(preData.characterId)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.isArray(result)
            assert.strictEqual(result.length, 1)
            result.forEach((res) => {
              assert.instanceOf(res, Journal)
            })
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })

  describe('getJournalsByCampaign()', () => {
    it('should return empty array if no matching campaign', async () => {
      await getJournalsByCampaign('abc').then(
        (result) => {
          assert.deepEqual(result, [])
        },
        (reason) => {
          assert.fail()
        }
      )
    })

    it('should return empty array if campaign has no journals', async () => {
      const preData = await intializeCampaignAndCharacter()

      await getJournalsByCampaign(preData.campaignId).then(
        (result) => {
          assert.deepEqual(result, [])
        },
        (reason) => {
          assert.fail()
        }
      )
    })

    it('should return journals if matching', async () => {
      const preData = await intializeCampaignAndCharacter()

      let _data = structuredClone(_journalData)
      _data.campaignId = preData.campaignId
      _data.characterId = preData.characterId

      await createJournal(_data)
        .then(
          (result) => {
            return getJournalsByCampaign(preData.campaignId)
          },
          (reason) => {
            console.log(reason)
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.isArray(result)
            assert.strictEqual(result.length, 1)
            result.forEach((res) => {
              assert.instanceOf(res, Journal)
            })
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })

  describe('updateJournal()', () => {
    it('should change after update', async () => {
      const preData = await intializeCampaignAndCharacter()

      let _data = structuredClone(_journalData)
      _data.campaignId = preData.campaignId
      _data.characterId = preData.characterId

      let _dataUpdated = structuredClone(_journalDataUpdated)
      _dataUpdated.campaignId = preData.campaignId
      _dataUpdated.characterId = preData.characterId

      await createJournal(_data)
        .then(
          (result) => {
            return result.getDataValue('id')
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            return updateJournal(result, _dataUpdated)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.instanceOf(result, Journal)
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })

  describe('deleteJournal()', () => {
    it('should be removed after delete', async () => {
      const preData = await intializeCampaignAndCharacter()

      let _data = structuredClone(_journalData)
      _data.campaignId = preData.campaignId
      _data.characterId = preData.characterId

      await createJournal(_data)
        .then(
          (result) => {
            return result.getDataValue('id')
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            return deleteJournal(result)
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
