const utils = require('./utils.js')

// const url = 'http://api.weatherstack.com/current?access_key=a4801250eefe635c0de7c5af084d5126&query=New York&units=f'

// request({url:url, json: true},(error,response) => {
//     console.log(response.body.current.weather_descriptions[0]+" "+response.body.current.temperature+" = > "+response.body.current.feelslike)
// })

const address = process.argv[2]

if (!address) {
    return console.log('Please provide an address')
}

utils.geoCode(address, (error,location_data) => {
    if (error) {
        return console.log(error)
    }

    utils.forecast(location_data.lat,location_data.long, (error,data) => {
        if (error) {
            return console.log(error)
        }
        console.log("Location",location_data.location," : ",data)
    })
})