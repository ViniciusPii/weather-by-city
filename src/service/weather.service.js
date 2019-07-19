const weatherClient = require("../client/weather.client")

const weatherService = () => {

    const weatherByCity = async (city) => {

        const body = await weatherClient.weatherByCity(city)

        const temperature = body.results.temp
        const date = body.results.date
        const description = body.results.description
        const time = body.results.time
        const city_name = body.results.city
        const forecast = body.results.forecast

        return {
            temperature,
            description,
            date,
            time,
            city_name,
            forecast
        }

    }

    return {
        weatherByCity
    }

}

module.exports = weatherService()