const express = require('express')

const routes = express.Router()


const OngController = require('./controllers/OngController')

// routes.get('/ongs', async (req, res) => {
//   const ongs = await connection('ongs').select('*')

//   res.json(ongs)
// })

routes.post('/ongs', OngController.store)

module.exports = routes
