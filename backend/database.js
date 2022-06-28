require('dotenv').config()
const mongoose = require('mongoose')

main().catch((error) => console.log(error))

async function main() {
  await mongoose.connect(`${process.env.MONGO_URI}/${process.env.MONGO_DB}`)

  if (process.env.ENVIRONMENT === 'dev') {
    mongoose.connection.db.dropCollection('characters')
    mongoose.connection.db.dropCollection('classes')
    mongoose.connection.db.dropCollection('equipment')
  }

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

  const Character = mongoose.model('Character', characterSchema)
  const Class = mongoose.model('Class', classSchema)
}
