const router = require('express').Router()
const { calculateWorkingHours } = require('../controllers/calculateTimeController')

router.post('/', calculateWorkingHours)

module.exports = router
