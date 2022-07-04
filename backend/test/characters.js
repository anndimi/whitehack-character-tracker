const assert = require('chai').assert
const { ForeignKeyConstraintError, ValidationError } = require('sequelize')
const { Character } = require('../database/models')
const { dropAndSync, populateLevels } = require('../database/helpers')
const { createCampaign } = require('../functions/campaigns')
const {
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require('../functions/characters')

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

const _characterDataUpdated = {
  name: 'Kindled Ash',
  class: 'Wise',
  species: 'Dwarf',
  vocation: 'Blood Priest',
  experiencePoints: 200,
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

describe('Character functions', () => {
  beforeEach(async () => {
    await dropAndSync()
    await populateLevels()
  })

  after(async () => {
    await dropAndSync()
    await populateLevels()
  })

  describe('getCharacter()', () => {
    it('should return null if no characters exist', async () => {
      await getCharacter(1).then(
        (result) => {
          assert.isNull(result)
        },
        (reason) => {
          assert.fail()
        }
      )
    })

    it('should return null if ID matches no existing character', async () => {
      await createCampaign('test')
        .then(
          (result) => {
            return createCharacter(result.getDataValue('id'), _characterData)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            return getCharacter('abc')
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

    it('should return character if ID matches existing character', async () => {
      await createCampaign('test')
        .then(
          (result) => {
            return createCharacter(result.getDataValue('id'), _characterData)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.instanceOf(result, Character)
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })

  describe('createCharacter()', () => {
    it('should fail if missing attributes property', async () => {
      let _data = structuredClone(_characterData)
      delete _data.attributes
      await createCampaign('test')
        .then(
          (result) => {
            return createCharacter(result.getDataValue('id'), _data)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.fail()
          },
          (reason) => {
            assert.instanceOf(reason, ValidationError)
          }
        )
    })

    it('should fail if group is malformed', async () => {
      let _data = structuredClone(_characterData)
      _data.attributes.str.groups = 'A'
      await createCampaign('test')
        .then(
          (result) => {
            return createCharacter(result.getDataValue('id'), _data)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.fail()
          },
          (reason) => {
            assert.instanceOf(reason, ValidationError)
          }
        )
    })

    it('should fail if no matching campaign', async () => {
      await createCampaign('test')
        .then(
          (result) => {
            return createCharacter('abc', _characterData)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.fail()
          },
          (reason) => {
            assert.instanceOf(reason, ForeignKeyConstraintError)
          }
        )
    })

    it('should save character if parameters are correct', async () => {
      await createCampaign('test')
        .then(
          (result) => {
            return createCharacter(result.getDataValue('id'), _characterData)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.instanceOf(result, Character)
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })

  describe('updateCharacter()', () => {
    it('should fail if missing ID', async () => {
      await updateCharacter(null, _characterData).then(
        (result) => {
          assert.fail()
        },
        (reason) => {
          assert.instanceOf(reason, TypeError)
        }
      )
    })

    it('should fail if ID does not match any existing character', async () => {
      await createCampaign('test')
        .then(
          (result) => {
            return createCharacter(result.getDataValue('id'), _characterData)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            return updateCharacter('abc', _characterData)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.fail()
          },
          (reason) => {
            assert.instanceOf(reason, TypeError)
          }
        )
    })

    it('should update character if ID and parameters are correct', async () => {
      await createCampaign('test')
        .then(
          (result) => {
            return createCharacter(result.getDataValue('id'), _characterData)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            return updateCharacter(
              result.getDataValue('id'),
              _characterDataUpdated
            )
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.instanceOf(result, Character)
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })

  describe('deleteCharacter()', () => {
    it('should fail if missing ID', async () => {
      await updateCharacter(null).then(
        (result) => {
          assert.fail()
        },
        (reason) => {
          assert.instanceOf(reason, TypeError)
        }
      )
    })

    it('should fail if ID does not match any existing character', async () => {
      await createCampaign('test')
        .then(
          (result) => {
            return createCharacter(result.getDataValue('id'), _characterData)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            return deleteCharacter('abc')
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.fail()
          },
          (reason) => {
            assert.instanceOf(reason, TypeError)
          }
        )
    })

    it('should delete character if ID is correct', async () => {
      await createCampaign('test')
        .then(
          (result) => {
            return createCharacter(result.getDataValue('id'), _characterData)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            return deleteCharacter(result.getDataValue('id'))
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.instanceOf(result, Character)
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })
})
