// import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv'
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb')

const port = process.env.PORT
const app = express()

app.use(express.json())
dotenv.config()
app.use(cors())

async function main() {
  const connectionUri = process.env.MONGO_URL
  const client = new MongoClient(connectionUri)
  await client.connect()
  const databases = await client.db().admin().listDatabases()
  console.log(databases)
}

//Function to fetch characters from db
async function fetchWhitehackCharacters() {
  const connectionUri = process.env.MONGO_URL
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

//Characters endpoint
app.get('/characters', async (req, res) => {
  const whitehackCharacters = await fetchWhitehackCharacters()

  console.log(whitehackCharacters)

  res.send(JSON.stringify(whitehackCharacters))
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
