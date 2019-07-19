const express = require("express")
const weatherController = require("./controller/weather.controller")

const app = express()

const port = 5000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(weatherController)

app.listen(port,() => {
    console.log(`server started on port ${port}`)
})
