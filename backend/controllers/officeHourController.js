const convertTimeToMinutes = (time) => {
    const timeArray = time.split(':')
    const minutes = (parseInt(timeArray[0]) * 60) + parseInt(timeArray[1])

    return minutes
}

const convertToMinutes = (req, res, next) => {
    try {
        const {t1, t2} = req.body
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

module.exports = {
    convertToMinutes,
}