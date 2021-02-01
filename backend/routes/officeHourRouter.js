const router = require('express').Router()
const {convertToMinutes} = require('../controllers/officeHourController')

router.post('/toMinutes', convertToMinutes)

module.exports = router