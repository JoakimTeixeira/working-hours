const calculateWorkingHours = (req, res, next) => {
  try {
    const { t1, t2 } = req.body

    if ((!t1 && t1 !== 0) || (!t2 && t2 !== 0)) {
      return res.status(400).json('A field was not entered')
    }

    if (t1 >= 300 && t1 <= 1320) {
      const day1 = t1

      if (t2 >= 300 && t2 <= 1320) {
        const day2 = t2
        const diurnal = day2 - day1

        return res.json({ diurnal })
      }

      if (t2 > 1320) {
        const night2 = t2
        const nocturnal = 1440 - night2
        const diurnal = (night2 - day1) - nocturnal

        return res.json({
          diurnal,
          nocturnal
        })
      } else {
        const dawn2 = t2
        const nocturnal = dawn2 + 120
        const diurnal = 1320 - day1

        return res.json({
          diurnal,
          nocturnal
        })
      }
    }

    if (t1 > 1320) {
      const night1 = t1

      if (t2 >= 300 && t2 <= 1320) {
        const day2 = t2
        const nocturnal = (1440 - night1) + 300
        const diurnal = day2 - 300

        return res.json({
          diurnal,
          nocturnal
        })
      }

      if (t2 > 1320) {
        const night2 = t2
        const nocturnal = night2 - night1

        return res.json({ nocturnal })
      } else {
        const dawn2 = t2
        const nocturnal = (1440 - night1) + dawn2

        return res.json({ nocturnal })
      }
    } else {
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

      if (t2 > 1320) {
        const night2 = t2
        const nocturnal = (1440 - night2) + (300 - dawn1)
        const diurnal = 1320 - 300

        return res.json({
          diurnal,
          nocturnal
        })
      } else {
        const dawn2 = t2
        const nocturnal = dawn2 - dawn1

        return res.json({ nocturnal })
      }
    }
  } catch (error) {
    return res.json(500).json({ error: error.message })
  }
}

module.exports = { calculateWorkingHours }
