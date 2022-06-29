const { sequelize, Character, Class } = require('./models')

const dropAndSync = async () => {
  await sequelize
    .query('PRAGMA foreign_keys = OFF')
    .then((result) => {
      return Character.sync({ force: true })
    })
    .then((result) => {
      return Class.sync({ force: true })
    })
    .then((result) => {
      return sequelize.query('PRAGMA foreign_keys = ON')
    })
}

module.exports = {
  dropAndSync,
}
