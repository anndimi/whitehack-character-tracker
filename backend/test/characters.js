const assert = require('chai').assert
const { ValidationError } = require('sequelize')
const { dropAndSync } = require('../database/helpers')
const {
  getCharacter,
  getCharacters,
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

describe('Character functions', () => {
  beforeEach(async () => {
    await dropAndSync()
  })

  after(async () => {
    await dropAndSync()
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
      await createCharacter(_characterData)
        .then(
          (result) => {
            return getCharacter(10)
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
      await createCharacter(_characterData)
        .then(
          (result) => {
            return getCharacter(1)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.strictEqual(result.getDataValue('id'), 1)
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })

  describe('getCharacters()', () => {
    it('should return empty array if no characters exist', async () => {
      await getCharacters().then(
        (result) => {
          assert.deepEqual(result, [])
        },
        (reason) => {
          assert.fail()
        }
      )
    })

    it('should return array with length one if one character exists', async () => {
      await createCharacter(_characterData)
        .then((result) => {
          return getCharacters()
        })
        .then(
          (result) => {
            assert.isArray(result)
            assert.strictEqual(result.length, 1)
          },
          (reason) => {
            assert.fail()
          }
        )
    })

    it('should return array with length two if two characters exist', async () => {
      await createCharacter(_characterData)
        .then((result) => {
          return createCharacter(_characterData)
        })
        .then((result) => {
          return getCharacters()
        })
        .then(
          (result) => {
            assert.isArray(result)
            assert.strictEqual(result.length, 2)
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
      await createCharacter(_data).then(
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
      await createCharacter(_data).then(
        (result) => {
          console.log(result)
          assert.fail()
        },
        (reason) => {
          assert.instanceOf(reason, ValidationError)
        }
      )
    })

    it('should save character if parameters are correct', async () => {
      await createCharacter(_characterData).then(
        (result) => {
          assert.strictEqual(result.getDataValue('id'), 1)
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
      await createCharacter(_characterData)
        .then(
          (result) => {
            return updateCharacter(2, _characterData)
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
      await createCharacter(_characterData)
        .then(
          (result) => {
            return updateCharacter(1, _characterData)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.strictEqual(result.getDataValue('id'), 1)
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
      await createCharacter(_characterData)
        .then(
          (result) => {
            return deleteCharacter(2, _characterData)
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
      await createCharacter(_characterData)
        .then(
          (result) => {
            return deleteCharacter(1)
          },
          (reason) => {
            assert.fail()
          }
        )
        .then(
          (result) => {
            assert.strictEqual(result.getDataValue('id'), 1)
          },
          (reason) => {
            assert.fail()
          }
        )
    })
  })
})
