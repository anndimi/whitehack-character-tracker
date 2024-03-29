const { sequelize, Campaign, Character, Level, Journal } = require('./models')

const dropAndSync = async () => {
  await sequelize
    .query('SET FOREIGN_KEY_CHECKS = 0')
    .then((result) => {
      return sequelize.getQueryInterface().dropAllTables()
    })
    .then((result) => {
      return Campaign.sync({ force: true })
    })
    .then((result) => {
      return Character.sync({ force: true })
    })
    .then((result) => {
      return Level.sync({ force: true })
    })
    .then((result) => {
      return Journal.sync({ force: true })
    })
    .then((result) => {
      return sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
    })
}

const populateLevels = async () => {
  const levelData = [
    {
      class: 'Deft',
      level: 1,
      experiencePointsRequired: 0,
      hitDiceBase: 1,
      hitDiceBonus: 0,
      attackValue: 10,
      savingThrow: 7,
      slotCount: 1,
      groupCount: 2,
      raiseCount: 0,
    },
    {
      class: 'Deft',
      level: 2,
      experiencePointsRequired: 1500,
      hitDiceBase: 2,
      hitDiceBonus: 0,
      attackValue: 11,
      savingThrow: 8,
      slotCount: 1,
      groupCount: 2,
      raiseCount: 1,
    },
    {
      class: 'Deft',
      level: 3,
      experiencePointsRequired: 3000,
      hitDiceBase: 2,
      hitDiceBonus: 1,
      attackValue: 11,
      savingThrow: 9,
      slotCount: 1,
      groupCount: 3,
      raiseCount: 1,
    },
    {
      class: 'Deft',
      level: 4,
      experiencePointsRequired: 6000,
      hitDiceBase: 3,
      hitDiceBonus: 0,
      attackValue: 12,
      savingThrow: 10,
      slotCount: 2,
      groupCount: 3,
      raiseCount: 2,
    },
    {
      class: 'Deft',
      level: 5,
      experiencePointsRequired: 12000,
      hitDiceBase: 3,
      hitDiceBonus: 1,
      attackValue: 12,
      savingThrow: 11,
      slotCount: 2,
      groupCount: 4,
      raiseCount: 2,
    },
    {
      class: 'Deft',
      level: 6,
      experiencePointsRequired: 24000,
      hitDiceBase: 4,
      hitDiceBonus: 0,
      attackValue: 13,
      savingThrow: 12,
      slotCount: 2,
      groupCount: 4,
      raiseCount: 3,
    },
    {
      class: 'Deft',
      level: 7,
      experiencePointsRequired: 48000,
      hitDiceBase: 4,
      hitDiceBonus: 1,
      attackValue: 13,
      savingThrow: 13,
      slotCount: 3,
      groupCount: 5,
      raiseCount: 3,
    },
    {
      class: 'Deft',
      level: 8,
      experiencePointsRequired: 96000,
      hitDiceBase: 5,
      hitDiceBonus: 0,
      attackValue: 14,
      savingThrow: 14,
      slotCount: 3,
      groupCount: 5,
      raiseCount: 4,
    },
    {
      class: 'Deft',
      level: 9,
      experiencePointsRequired: 192000,
      hitDiceBase: 5,
      hitDiceBonus: 1,
      attackValue: 14,
      savingThrow: 15,
      slotCount: 3,
      groupCount: 6,
      raiseCount: 4,
    },
    {
      class: 'Deft',
      level: 10,
      experiencePointsRequired: 384000,
      hitDiceBase: 6,
      hitDiceBonus: 0,
      attackValue: 15,
      savingThrow: 16,
      slotCount: 4,
      groupCount: 6,
      raiseCount: 5,
    },
    {
      class: 'Strong',
      level: 1,
      experiencePointsRequired: 0,
      hitDiceBase: 1,
      hitDiceBonus: 2,
      attackValue: 11,
      savingThrow: 5,
      slotCount: 1,
      groupCount: 2,
      raiseCount: 0,
    },
    {
      class: 'Strong',
      level: 2,
      experiencePointsRequired: 2000,
      hitDiceBase: 2,
      hitDiceBonus: 0,
      attackValue: 11,
      savingThrow: 6,
      slotCount: 1,
      groupCount: 2,
      raiseCount: 1,
    },
    {
      class: 'Strong',
      level: 3,
      experiencePointsRequired: 4000,
      hitDiceBase: 3,
      hitDiceBonus: 0,
      attackValue: 12,
      savingThrow: 7,
      slotCount: 1,
      groupCount: 2,
      raiseCount: 1,
    },
    {
      class: 'Strong',
      level: 4,
      experiencePointsRequired: 8000,
      hitDiceBase: 4,
      hitDiceBonus: 0,
      attackValue: 13,
      savingThrow: 8,
      slotCount: 2,
      groupCount: 3,
      raiseCount: 2,
    },
    {
      class: 'Strong',
      level: 5,
      experiencePointsRequired: 16000,
      hitDiceBase: 5,
      hitDiceBonus: 0,
      attackValue: 13,
      savingThrow: 9,
      slotCount: 2,
      groupCount: 3,
      raiseCount: 2,
    },
    {
      class: 'Strong',
      level: 6,
      experiencePointsRequired: 32000,
      hitDiceBase: 6,
      hitDiceBonus: 0,
      attackValue: 14,
      savingThrow: 10,
      slotCount: 2,
      groupCount: 3,
      raiseCount: 3,
    },
    {
      class: 'Strong',
      level: 7,
      experiencePointsRequired: 64000,
      hitDiceBase: 7,
      hitDiceBonus: 0,
      attackValue: 15,
      savingThrow: 11,
      slotCount: 3,
      groupCount: 4,
      raiseCount: 3,
    },
    {
      class: 'Strong',
      level: 8,
      experiencePointsRequired: 128000,
      hitDiceBase: 8,
      hitDiceBonus: 0,
      attackValue: 15,
      savingThrow: 12,
      slotCount: 3,
      groupCount: 4,
      raiseCount: 4,
    },
    {
      class: 'Strong',
      level: 9,
      experiencePointsRequired: 256000,
      hitDiceBase: 9,
      hitDiceBonus: 0,
      attackValue: 16,
      savingThrow: 13,
      slotCount: 3,
      groupCount: 4,
      raiseCount: 4,
    },
    {
      class: 'Strong',
      level: 10,
      experiencePointsRequired: 512000,
      hitDiceBase: 10,
      hitDiceBonus: 0,
      attackValue: 17,
      savingThrow: 14,
      slotCount: 4,
      groupCount: 5,
      raiseCount: 5,
    },
    {
      class: 'Wise',
      level: 1,
      experiencePointsRequired: 0,
      hitDiceBase: 1,
      hitDiceBonus: 1,
      attackValue: 10,
      savingThrow: 6,
      slotCount: 1,
      groupCount: 2,
      raiseCount: 0,
    },
    {
      class: 'Wise',
      level: 2,
      experiencePointsRequired: 2500,
      hitDiceBase: 2,
      hitDiceBonus: 0,
      attackValue: 11,
      savingThrow: 7,
      slotCount: 1,
      groupCount: 2,
      raiseCount: 1,
    },
    {
      class: 'Wise',
      level: 3,
      experiencePointsRequired: 5000,
      hitDiceBase: 2,
      hitDiceBonus: 1,
      attackValue: 11,
      savingThrow: 8,
      slotCount: 2,
      groupCount: 2,
      raiseCount: 1,
    },
    {
      class: 'Wise',
      level: 4,
      experiencePointsRequired: 10000,
      hitDiceBase: 3,
      hitDiceBonus: 0,
      attackValue: 11,
      savingThrow: 9,
      slotCount: 2,
      groupCount: 3,
      raiseCount: 2,
    },
    {
      class: 'Wise',
      level: 5,
      experiencePointsRequired: 20000,
      hitDiceBase: 4,
      hitDiceBonus: 0,
      attackValue: 12,
      savingThrow: 10,
      slotCount: 3,
      groupCount: 3,
      raiseCount: 2,
    },
    {
      class: 'Wise',
      level: 6,
      experiencePointsRequired: 40000,
      hitDiceBase: 4,
      hitDiceBonus: 1,
      attackValue: 12,
      savingThrow: 11,
      slotCount: 3,
      groupCount: 3,
      raiseCount: 3,
    },
    {
      class: 'Wise',
      level: 7,
      experiencePointsRequired: 80000,
      hitDiceBase: 5,
      hitDiceBonus: 0,
      attackValue: 12,
      savingThrow: 12,
      slotCount: 4,
      groupCount: 4,
      raiseCount: 3,
    },
    {
      class: 'Wise',
      level: 8,
      experiencePointsRequired: 160000,
      hitDiceBase: 6,
      hitDiceBonus: 0,
      attackValue: 13,
      savingThrow: 13,
      slotCount: 4,
      groupCount: 4,
      raiseCount: 4,
    },
    {
      class: 'Wise',
      level: 9,
      experiencePointsRequired: 320000,
      hitDiceBase: 6,
      hitDiceBonus: 1,
      attackValue: 13,
      savingThrow: 14,
      slotCount: 5,
      groupCount: 4,
      raiseCount: 4,
    },
    {
      class: 'Wise',
      level: 10,
      experiencePointsRequired: 640000,
      hitDiceBase: 7,
      hitDiceBonus: 0,
      attackValue: 13,
      savingThrow: 15,
      slotCount: 5,
      groupCount: 5,
      raiseCount: 5,
    },
  ]

  await Level.bulkCreate(levelData)
}

module.exports = {
  dropAndSync,
  populateLevels,
}
