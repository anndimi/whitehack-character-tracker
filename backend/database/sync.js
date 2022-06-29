const { sequelize, Character, Class } = require('./models')

// FIXME drop tables and re-sync
Character.sync({ force: true })
Class.sync({ force: true })
