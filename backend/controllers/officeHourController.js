const convertTimeToMinutes = (time) => {
    const timeArray = time.split(':')
    const minutes = (parseInt(timeArray[0]) * 60) + parseInt(timeArray[1])

    return minutes
}

const convertToMinutes = (req, res, next) => {
    try {
        const {t1, t2} = req.body

        if (!t1 && t1 !== 0 || !t2 && 2 !== 0) {
            return res.status(400).json({msg: 'A field was not entered'})
        }

        const newT1 = convertTimeToMinutes(t1)
        const newT2 = convertTimeToMinutes(t2)

        res.json({
            t1: newT1,
            t2: newT2
        })
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const convertTimeFromMinutes = (time) => {
    let hours = Math.floor(parseInt(time) / 60)
    let minutes = parseInt(time) % 60

    // handle "00:00" format
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes

    const hourAndMinuteFormat = `${hours}:${minutes}`

    return hourAndMinuteFormat
}

const convertFromMinutes = (req, res, next) => {
    try {
        const {diurnal, nocturnal} = req.body
        
        if (!diurnal && diurnal !== 0 || !nocturnal && nocturnal !== 0) {
            return res.status(400).json({msg: 'A field was not entered'})
        }

        const convertedDiurnal = convertTimeFromMinutes(diurnal)
        const convertedNocturnal = convertTimeFromMinutes(nocturnal)

        res.json({
            diurnal: convertedDiurnal,
            nocturnal: convertedNocturnal
        })

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    convertToMinutes,
    convertFromMinutes
}