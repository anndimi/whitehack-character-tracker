const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/database.sqlite',
})

const Character = sequelize.define('Character', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  experiencePoints: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  attributes: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  isDead: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
})

const Class = sequelize.define('Class', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  experiencePointsRequired: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  attackValue: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  savingThrow: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  slotCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  groupCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  raiseCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

module.exports = {
  sequelize,
  Character,
  Class,
}
