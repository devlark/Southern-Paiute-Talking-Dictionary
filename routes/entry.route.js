const express = require('express')
const router = express.Router()
const entryController = require('../controllers/entry.controller.js')


router.get('/word/:id', entryController.getID)

router.get('/word', entryController.getSearchResults)

router.post('/word', entryController.addEntry)

// TODO: use PATCH /word/:id
router.post('/word/:id/patch', entryController.updateEntry)

// TODO: use DELETE /word/:id
//TODO: Need to make this delete, can do so successfully if you incorporate ajax/axios and fetch
router.post('/word/:id/delete', entryController.deleteEntry)

//different pages. not related to the db
router.get('/word/:id/edit', entryController.updateInputPage)

router.get('/input', entryController.getInputPage)

router.get('/entryAdded', entryController.entryAdded)

module.exports = router