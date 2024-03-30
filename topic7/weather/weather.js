let url = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

let weatherDataTable = document.querySelector('#weather-forecast')

// make a request to the weather API url

// fetch makes a request to a url, it returns a Promise
// a successful call means that we have data, and the Promise "resolved"
// The then function takes a callback function as an argument
// we can process the initial response in that callback function

// Arrow notation also works for this program

// fetch(url)
//     .then((res) => {
//         // convert the response from bytes into json
//         return res.json()}) // still a Promise. it has to be handled in another then block
//     .then((jsonData) => {
//         console.log(jsonData)
//         let propertiesObject = propertiesObject.propertoes
//         let periodArray = propertiesObject.periods
//
//         periodArray.forEach((oneForecastPeriodObject) => {
//             let timeForForecast = oneForecastPeriodObject.name
//             let newTableRow = document.createElement('tr')
//         })
//     })



// normal function notation from zoom lab
fetch(url).then(function (response) {
    return response.json() // convert the response from byte into json
    // this is another Promise
    // A promise returned from here should be handled by the callback function in another then function
}).then(function (actualJsonData) {
    // has a callback that is called once the data has been converted into jason that our program can use
    // now we have json data to work with
    let propertiesObject = actualJsonData.properties
    let periodsArray = propertiesObject.periods

    periodsArray.forEach( function(oneForecastPeriodObject) {
        // read data from the object in the response
        let timeForForecast = oneForecastPeriodObject.name
        let temperature = oneForecastPeriodObject.temperature
        let iconURL = oneForecastPeriodObject.icon
        let iconImg = "<img src =" + iconURL + ">"
        let detailedForecast = oneForecastPeriodObject.detailedForecast

        // create a new tr, td element for data
        let newTableRow = document.createElement('tr')
        let timeTableData = document.createElement('td')
        let temperatureTableData = document.createElement('td')
        let iconTableData = document.createElement('td')
        let detailedForecastTableData = document.createElement('td')

        // set innerHTML to string data from the api
        timeTableData.innerHTML = timeForForecast
        temperatureTableData.innerHTML = temperature
        iconTableData.innerHTML = iconImg
        detailedForecastTableData.innerHTML = detailedForecast

        // add a new td elements to the newTableRow
        newTableRow.appendChild(timeTableData)
        newTableRow.appendChild(temperatureTableData)
        newTableRow.appendChild(iconTableData)
        newTableRow.appendChild(detailedForecastTableData)

        // add the newTableRow to the weather table
        weatherDataTable.appendChild(newTableRow)

    })
})
