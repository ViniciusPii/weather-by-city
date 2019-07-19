const express = require("express")
const weatherController = require("./controller/weather.controller")

const app = express()

const port = 5000

app.use(weatherController)

app.listen(port,() => {
    console.log(`server started on port ${port}`)
})
