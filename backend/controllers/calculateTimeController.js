const calculateWorkingHours = (req, res, next) => {
  try {
    // Get user inputs
    const { t1, t2 } = req.body

    // Verify if inputs are null or weren't entered
    if ((!t1 && t1 !== 0) || (!t2 && t2 !== 0)) {
      return res.status(400).json('A field was not entered')
    }

    // Verify if 1st input is between 05:00 AM and 10:00 PM
    if (t1 >= 300 && t1 <= 1320) {
      const day1 = t1

      // Verify if 2nd input is between 05:00 AM and 10:00 PM
      if (t2 >= 300 && t2 <= 1320) {
        const day2 = t2
        const diurnal = day2 - day1

        return res.json({ diurnal })
      }

      // Verify if 2nd input is greater than 10:00 PM
      if (t2 > 1320) {
        const night2 = t2
        const nocturnal = 1440 - night2
        const diurnal = (night2 - day1) - nocturnal

        return res.json({
          diurnal,
          nocturnal
        })
      } else {
        // Verify if 2nd input is less than 05:00 AM
        const dawn2 = t2
        const nocturnal = dawn2 + 120
        const diurnal = 1320 - day1

        return res.json({
          diurnal,
          nocturnal
        })
      }
    }

    // Verify if 1st input is greater than 10:00 PM
    if (t1 > 1320) {
      const night1 = t1

      // Verify if 2nd input is between 05:00 AM and 10:00 PM
      if (t2 >= 300 && t2 <= 1320) {
        const day2 = t2
        const nocturnal = (1440 - night1) + 300
        const diurnal = day2 - 300

        return res.json({
          diurnal,
          nocturnal
        })
      }

      // Verify if 2nd input is greater than 10:00 PM
      if (t2 > 1320) {
        const night2 = t2
        const nocturnal = night2 - night1

        return res.json({ nocturnal })
      } else {
        // Verify if 2nd input is less than 05:00 AM
        const dawn2 = t2
        const nocturnal = (1440 - night1) + dawn2

        return res.json({ nocturnal })
      }
    } else {
      // Verify if 1st input is less than 05:00 AM
      const dawn1 = t1

      if (t2 >= 300 && t2 <= 1320) {
        const day2 = t2
        const nocturnal = 300 - dawn1
        const diurnal = day2 - 300

        return res.json({
          diurnal,
          nocturnal
        })
      }

      // Verify if 2nd input is greater than 10:00 PM
      if (t2 > 1320) {
        const night2 = t2
        const nocturnal = (1440 - night2) + (300 - dawn1)
        const diurnal = 1320 - 300

        return res.json({
          diurnal,
          nocturnal
        })
      } else {
        // Verify if 2ndt input is less than 05:00 AM
        const dawn2 = t2
        const nocturnal = dawn2 - dawn1

        return res.json({ nocturnal })
      }
    }
  } catch (error) {
    // Catch any other errors
    return res.json(500).json({ error: error.message })
  }
}

module.exports = { calculateWorkingHours }
