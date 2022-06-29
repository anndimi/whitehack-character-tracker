const assert = require('chai').assert()
const { sequelize, Character } = require('../database/models')
const {
  getCharacter,
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require('./functions/characters')

describe('Character functions', () => {
  describe('getCharacter()', () => {
    it('should fail if no characters exist', () => {})

    it('should fail if ID matches no existing character', () => {})

    it('should return character if ID matches existing character', () => {})
  })

  describe('getCharacters()', () => {
    it('should return empty array if no characters exist', () => {})

    it('should return array with length one if one character exists', () => {})

    it('should return array with length two if two characters exist', () => {})
  })
})
