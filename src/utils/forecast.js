const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ac87cbf1419a53794bf05a85be587371/' + latitude + ',' + longitude;

    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (body.error) {
            callback(body.error, undefined);
        } else {
            // const data = {
            //     summary: response.body.daily.data[0].summary,
            //     temperature: response.body.currently.temperature,
            //     precipProbability: response.body.currently.precipProbability
            // }
            const data = body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + (body.currently.precipProbability*100) + '% chance of rain.';
            callback(undefined, data)
        }
    })
}

module.exports = forecast