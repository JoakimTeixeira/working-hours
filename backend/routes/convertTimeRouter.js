const router = require('express').Router()
const { convertToMinutes, convertFromMinutes } = require('../controllers/convertTimeController')

// Routes from "/convert" endpoint
router.post('/toMinutes', convertToMinutes)
router.post('/fromMinutes', convertFromMinutes)

// Export routes for usage in the "index.js" file
module.exports = router
