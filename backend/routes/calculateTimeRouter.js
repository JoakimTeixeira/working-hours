const router = require('express').Router()
const {
  calculateWorkingHours
} = require('../controllers/calculateTimeController')

// Route from "calculate" endpoint
router.post('/', calculateWorkingHours)

// Exports route for usage in the "index.js" file
module.exports = router
