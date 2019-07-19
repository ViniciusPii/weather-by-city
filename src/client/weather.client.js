const superagent = require("superagent")

const BASE_API = "https://api.hgbrasil.com/weather"
const KEY = "b8af90ac"

const weatherClient = () => {

    const weatherByCity = async (city) => {
        const weatherResponse = await superagent.get(BASE_API)
            .query({
                key: KEY,
                city_name: city
            })

            return weatherResponse.body
    }

    return {
        weatherByCity
    }

}

module.exports = weatherClient()