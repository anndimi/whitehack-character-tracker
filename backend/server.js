// import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv'
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient } = require('mongodb')
const { defineSchemas } = require('./database')

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())

async function main() {
  // Import ODM object and schemas
  const { mongoose, Character, Class } = await defineSchemas()

  const connectionUri = process.env.MONGO_URI
  const client = new MongoClient(connectionUri)
  await client.connect()
  const databases = await client.db().admin().listDatabases()
  console.log(databases)
}

//Function to fetch characters from db
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

main()

//Characters endpoint
app.get('/characters', async (req, res) => {
  const whitehackCharacters = await fetchWhitehackCharacters()

  console.log(whitehackCharacters)

  res.send(JSON.stringify(whitehackCharacters))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
