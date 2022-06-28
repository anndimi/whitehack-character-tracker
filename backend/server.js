const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ObjectId } = require('mongodb')
const { defineSchemas } = require('./database')

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())

async function main() {
  // Import ODM object and schemas
  const { mongoose, Character, Class } = await defineSchemas()
}

//Function to fetch all characters from db
async function fetchWhitehackCharacters() {
  const connectionUri = process.env.MONGO_URI
  const client = new MongoClient(connectionUri)
  await client.connect()

  const findWhitehackCharacters = await client
    .db('characters-tracker')
    .collection('characters')
    .find()

  let charactersArray = []

  await findWhitehackCharacters.forEach((character) =>
    charactersArray.push(character)
  )

  return charactersArray
}

// main()

//Characters endpoint
//Function to fetch single character from debugger
async function fetchSingleWhitehackCharacter(id) {
  const connectionUri = process.env.MONGO_URI
  const client = new MongoClient(connectionUri)
  await client.connect()

  const query = { _id: new ObjectId(id) }

  console.log(id)

  const findSingleWhitehackCharacter = await client
    .db('characters-tracker')
    .collection('characters')
    .find(query)
    .toArray()

  return findSingleWhitehackCharacter
}

//All characters endpoint
app.get('/characters', async (req, res) => {
  const whitehackCharacters = await fetchWhitehackCharacters()

  res.send(JSON.stringify(whitehackCharacters))
})

//Single character endpoint
app.get('/characters/character/:id', async (req, res) => {
  const characterInfo = await fetchSingleWhitehackCharacter(req.params.id)

  res.send(JSON.stringify(characterInfo))

  return characterInfo
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
