const { Sequelize, DataTypes, Model, Op } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  logging: false,
  storage: './database/database.sqlite',
})

const arraysAreEqual = (arr1, arr2) => {
  if (
    !Array.isArray(arr1) ||
    !Array.isArray(arr2) ||
    arr1.length !== arr2.length
  ) {
    return false
  }

  const sorted1 = arr1.concat().sort()
  const sorted2 = arr2.concat().sort()

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) {
      return false
    }
  }

  return true
}

class Character extends Model {
  async getLevelEntry() {
    return await Level.findOne({
      where: {
        class: this.class,
        experiencePointsRequired: {
          [Op.lte]: this.experiencePoints,
        },
      },
      order: [['level', 'DESC']],
    })
  }
}

Character.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Deft', 'Strong', 'Wise']],
      },
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
      validate: {
        min: 0,
      },
    },
    background: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      async get() {
        return await this.getLevelEntry().then((response) => {
          return response.getDataValue('level')
        })
      },
    },
    attributes: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        isValidAttributesJSON(attributes) {
          // Make sure there are the expected 6 attributes
          const providedKeys = Object.keys(attributes)
          const expectedKeys = ['str', 'dex', 'con', 'int', 'wis', 'cha']
          if (!arraysAreEqual(providedKeys, expectedKeys)) {
            throw new Error(
              'Attributes object must have str, dex, con, int, wis, and cha properties'
            )
          }

          // Make sure each attribute has a valid score value and groups array
          const expectedSubKeys = ['score', 'groups']
          for (const attribute in attributes) {
            let providedSubKeys = Object.keys(attributes[attribute])
            if (!arraysAreEqual(providedSubKeys, expectedSubKeys)) {
              throw new Error(
                'Individual attribute objects must have score and group properties'
              )
            }

            let score = attributes[attribute].score
            let groups = attributes[attribute].groups

            if (score < 3 || score > 20) {
              throw new Error(
                'Attribute scores must be greater than 2 and less than 21'
              )
            }

            if (!Array.isArray(groups) || groups.length > 2) {
              throw new Error('Groups must be array with maximum length 2')
            }

            for (const group of groups) {
              if (typeof group !== 'string') {
                throw new Error('Individual groups must be strings')
              }
            }
          }

          return true
        },
      },
    },
    isDead: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    statusNote: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize }
)

const Level = sequelize.define('Level', {
  class: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Deft', 'Strong', 'Wise']], // TODO add support for Brave and Fortunate
    },
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 10,
      min: 1,
    },
  },
  experiencePointsRequired: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 640000,
      min: 0,
    },
  },
  hitDiceBase: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 10,
      min: 1,
    },
  },
  hitDiceBonus: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 2,
      min: 0,
    },
  },
  attackValue: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 17,
      min: 10,
    },
  },
  savingThrow: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 16,
      min: 5,
    },
  },
  slotCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 5,
      min: 1,
    },
  },
  groupCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 6,
      min: 2,
    },
  },
  raiseCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 5,
      min: 0,
    },
  },
})

const Campaign = sequelize.define('Campaign', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
})

const Journal = sequelize.define('Journal', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  signature: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

Campaign.hasMany(Character)
Character.belongsTo(Campaign)

Character.hasMany(Journal)
Journal.belongsTo(Character)

Campaign.hasMany(Journal)
Journal.belongsTo(Campaign)

module.exports = {
  sequelize,
  Campaign,
  Character,
  Level,
  Journal,
}
