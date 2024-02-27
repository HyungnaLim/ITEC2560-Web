let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeISSLocationFetched = document.querySelector('#time')

let update = 10000
let maxFailedAttempts = 3

let issMarker
let issIcon = L.icon({ // create custom marker icon
    iconUrl: 'iss-icon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

// display map
let map = L.map('iss-map').setView([0,0], 1)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// call function one time to start
iss(maxFailedAttempts)

function iss(attempts) { // set a function to fetch data from url

    if (attempts <= 0) { // if the attempts is 0 or less
        alert('Failed to contact ISS server after several attempts.')
        return // stop the function
    }

    fetch(url).then((response) => { // if the fetch request is successful then do this
        return response.json() // process response into JSON
        // anything returned in this then block will go to the next then block. so response.json = issData
    }).then((issData) => {
        // console.log(issData)
        let latitude = issData.latitude
        let longitude = issData.longitude
        issLat.innerHTML = latitude
        issLong.innerHTML = longitude

        if (!issMarker) { // if there is no marker
            issMarker = L.marker([latitude, longitude], {icon: issIcon}).addTo(map) // create marker
        } else { // if there is a marker already
            issMarker.setLatLng([latitude, longitude]) // update the marker coordinates
        }

        let now = Date() // save the current date/time
        timeISSLocationFetched.innerHTML = `This is fetched at ${now}` // display on the page

    }).catch((err) => { // catch block for error handling\
        attempts = attempts - 1 // subtract 1 from number of attempts
        console.log('ERROR!', err)
    }).finally( () => { // require empty parenthesis
        // finally block will run whether the fetch worked or failed

        // by using setInterval, if the fetch request takes a long time,
        // the processing could overlap with the next request
        // to solve this problem, use recursive setTimeout
        // this way it will wait until the call is done, and then wait certain amount of time
        setTimeout(iss, update, attempts)
    })
}