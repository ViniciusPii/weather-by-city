const express = require("express")
const weatherService = require("../service/weather.service")


const weatherController = () => {

    const router = express.Router()

    router.get("/weather/city/:city", async (req, res) => {

        const city = req.params.city
        const result = await weatherService.weatherByCity(city)
        res.send(result)

    })

    return router

}

module.exports = weatherController()