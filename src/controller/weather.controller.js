const express = require("express")


const weatherController = () => {

    const router = express.Router()

    router.get("/weather/city/:city", (req, res) => {

        res.send("Deu certo")

    })

    return router

}

module.exports = weatherController()