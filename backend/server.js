// Environment configuration
require('dotenv').config()

// Initialize and configure express server
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

// Import functions
const {
  getCampaign,
  createCampaign,
  updateCampaign,
  deleteCampaign,
} = require('./functions/campaigns')

const {
  getCharacter,
  getCharactersByCampaign,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require('./functions/characters')

const {
  getJournalsByCharacter,
  getJournalsByCampaign,
  createJournal,
  updateJournal,
  deleteJournal,
} = require('./functions/journals')

/*
 * ROUTES: CHARACTERS
 */
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

app.get('/characters/:id/journals', async (req, res) => {
  await getJournalsByCharacter(req.params.id).then(
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
      console.log(reason)
      res.sendStatus(500)
    }
  )
})

app.patch('/characters/:id', async (req, res) => {
  await updateCharacter(req.params.id, req.body).then(
    (result) => {
      console.log('bajs', result)
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

/*
 * ROUTES: CAMPAIGNS
 */
app.post('/campaigns', async (req, res) => {
  await createCampaign(req.body.name).then(
    (result) => {
      res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

app.get('/campaigns/:name', async (req, res) => {
  await getCampaign(req.params.name).then(
    (result) => {
      res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

app.get('/campaigns/:name/characters', async (req, res) => {
  await getCharactersByCampaign(req.params.name).then(
    (result) => {
      res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

app.get('/campaigns/:name/journals', async (req, res) => {
  await getJournalsByCampaign(req.params.name).then(
    (result) => {
      res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

app.patch('/campaigns/:name', async (req, res) => {
  await updateCampaign(req.params.id, req.body).then(
    (result) => {
      return res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

app.delete('/campaigns/:name', async (req, res) => {
  await deleteCampaign(req.params.id).then(
    (result) => {
      res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

/*
 * ROUTES: JOURNALS
 */
app.post('/journals', async (req, res) => {
  await createJournal(req.body).then(
    (result) => {
      res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

app.patch('/journals/:id', async (req, res) => {
  await updateJournal(req.params.id, req.body).then(
    (result) => {
      return res.send(result)
    },
    (reason) => {
      res.sendStatus(500)
    }
  )
})

app.delete('/journals/:id', async (req, res) => {
  await deleteJournal(req.params.id).then(
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
