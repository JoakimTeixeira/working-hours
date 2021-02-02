// Function that converts time from HH:MM format to minutes
const convertTimeToMinutes = (time) => {
  const timeArray = time.split(':')
  const minutes = (parseInt(timeArray[0]) * 60) + parseInt(timeArray[1])

  return minutes
}

// Route for converting time from HH:MM format to minutes
const convertToMinutes = (req, res, next) => {
  try {
    // Get user inputs
    const { t1, t2 } = req.body

    // Verify if inputs are null or weren't entered
    if ((!t1 && t1 !== 0) || (!t2 && 2 !== 0)) {
      return res.status(400).json({ msg: 'A field was not entered' })
    }

    // Convert user inputs from HH:MM format to minutes
    const newT1 = convertTimeToMinutes(t1)
    const newT2 = convertTimeToMinutes(t2)

    // Return response
    return res.json({
      t1: newT1,
      t2: newT2
    })
  } catch (error) {
    // Catch any other errors
    return res.status(500).json({ error: error.message })
  }
}

// Function that converts from minutes to HH:MM time format
const convertTimeFromMinutes = (time) => {
  let hours = Math.floor(parseInt(time) / 60)
  let minutes = parseInt(time) % 60

  // handle "00:00" format
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes

  const hourAndMinuteFormat = `${hours}:${minutes}`

  return hourAndMinuteFormat
}

// Route for converting minutes to HH:MM time format
const convertFromMinutes = (req, res, next) => {
  try {
    // Get responses from "calculateTimeController"
    const { diurnal, nocturnal } = req.body

    // Verify if inputs are null or weren't entered
    if ((!diurnal && diurnal !== 0) || (!nocturnal && nocturnal !== 0)) {
      return res.status(400).json({ msg: 'A field was not entered' })
    }

    // Convert time from minutes to HH:MM time format
    const convertedDiurnal = convertTimeFromMinutes(diurnal)
    const convertedNocturnal = convertTimeFromMinutes(nocturnal)

    // Return response
    return res.json({
      diurnal: convertedDiurnal,
      nocturnal: convertedNocturnal
    })
  } catch (error) {
    // Catch any other errors
    return res.status(500).json({ error: error.message })
  }
}

// Export functions for usage in the "convertTimeRouter"
module.exports = {
  convertToMinutes,
  convertFromMinutes
}
