// import express from 'express'
// import cors from 'cors'
// import dotenv from 'dotenv'
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb')

const port = process.env.PORT || 8080
const app = express()

app.use(express.json())
dotenv.config()
app.use(cors())

async function main() {
  const connectionUri = process.env.MONGO_URL
  const client = new MongoClient(connectionUri)
  await client.connect()
  const databases = await client.db().admin().listDatabases()
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
