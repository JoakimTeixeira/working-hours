const router = require('express').Router()
const { convertToMinutes, convertFromMinutes } = require('../controllers/convertTimeController')

router.post('/toMinutes', convertToMinutes)
router.post('/fromMinutes', convertFromMinutes)

module.exports = router
