const express = require('express')

const routes = express.Router()

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

routes.post('/session', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.store)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/incidents/:ong_id', ProfileController.index)

module.exports = routes
