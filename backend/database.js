require('dotenv').config()
const mongoose = require('mongoose')

// Connect to database
const defineSchemas = async () => {
  return mongoose
    .connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`)
    .then(() => {
      // Check for collection existence and drop them if in dev environment
      if (process.env.ENVIRONMENT === 'dev') {
        mongoose.connection.db
          .listCollections({ name: 'characters' })
          .next((error, collectionInfo) => {
            if (collectionInfo) {
              mongoose.connection.db.dropCollection('characters')
            }
          })

        mongoose.connection.db
          .listCollections({ name: 'classes' })
          .next((error, collectionInfo) => {
            if (collectionInfo) {
              mongoose.connection.db.dropCollection('classes')
            }
          })

        mongoose.connection.db
          .listCollections({ name: 'equipment' })
          .next((error, collectionInfo) => {
            if (collectionInfo) {
              mongoose.connection.db.dropCollection('equipment')
            }
          })
      }
    })
    .then(() => {
      // Create schemas
      const characterSchema = new mongoose.Schema({
        name: String,
        species: String,
        class: String,
        vocation: String,
        xp: Number,
        attributes: {
          strength: Number,
          dexterity: Number,
          constitution: Number,
          intelligence: Number,
          wisdom: Number,
          charisma: Number,
        },
        hp: Number,
        ac: Number,
        abilitySlots: [String],
        coins: Number,
      })

      const classSchema = new mongoose.Schema({
        name: String,
        description: String,
        level: Number,
        xp: Number,
        hd: {
          base: Number,
          bonus: Number,
        },
        av: Number,
        st: Number,
        groupCount: Number,
        abilities: [String],
        abilitySlotCount: Number,
        raises: Number,
      })

      // Create models
      return {
        mongoose: mongoose,
        Character: mongoose.model('Character', characterSchema),
        Class: mongoose.model('Class', classSchema),
      }
    })
}

module.exports = {
  defineSchemas,
}
