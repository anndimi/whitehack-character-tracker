// Environment configuration
require('dotenv').config()

// Initialize and configure express server
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

// Import functions
const {
  getCharacter,
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require('./functions/characters')

app.get('/characters', async (req, res) => {
  await getCharacters().then(
    (result) => {
      res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

app.post('/characters', async (req, res) => {
  await createCharacter(req.body).then(
    (result) => {
      res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

app.get('/characters/:id', async (req, res) => {
  await getCharacter(req.params.id).then(
    (result) => {
      res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

app.patch('/characters/:id', async (req, res) => {
  await updateCharacter(req.params.id, req.body).then(
    (result) => {
      return res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

app.delete('/characters/:id', async (req, res) => {
  await deleteCharacter(req.params.id).then(
    (result) => {
      res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
