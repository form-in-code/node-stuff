const request = require("request")

const geoCode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibWFuaXNoLW5vZGUtdGVzdCIsImEiOiJja283cmZka3kxZXJuMnZtbG1pd3NoeHRrIn0.Zz9n-LCHp3naoVYqpoX9UA'
    request({url:url, json: true},(error,response) => {
        if (error) {
            callback("Can't query")
        } else if (response.body.features === undefined) {
            callback("No location")
        } else {
            callback(undefined,{
                lat: response.body.features[0].center[1],
                long: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

const forecast = (lat,long,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a4801250eefe635c0de7c5af084d5126&query='+lat+','+long+'&units=f'
    request({url:url, json: true},(error,response) => {
        if (error) {
            callback("Can't query")
        } else if (response.body.current === undefined) {
            callback("No location")
        } else {
            callback(undefined,response.body.current.weather_descriptions[0]+" "+response.body.current.temperature+" = > "+response.body.current.feelslike)
        }
    })
}

module.exports = {
    geoCode:geoCode,
    forecast:forecast
}
