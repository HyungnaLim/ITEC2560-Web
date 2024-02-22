let areaCenter = [39, -98]
let zoom = 4

let bridgeMap = L.map('bridge-map').setView(areaCenter, zoom)

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap)  // add the tileLayer to the bridge map

bridges = [
    {"name":"Verrazano-Narrows Bridge", "location": [40.6066, -74.0447], "city": "New York, NY", "span": 1298.4},
    {"name":"Golden Gate Bridge", "location": [37.8199, -122.4783], "city": "San Francisco and Marin, CA", "span": 1280.2},
    {"name":"Mackinac Bridge", "location": [45.8174, -84.7278], "city": "Mackinaw and St Ignace, MI", "span": 1158.0},
    {"name":"George Washington Bridge", "location": [40.8517, -73.9527], "city": "New York, NY and New Jersey, NJ", "span": 1067.0},
    {"name":"Tacoma Narrows Bridge", "location": [47.2690, -122.5517], "city": "Tacoma and Kitsap, WA", "span": 853.44},
]

bridges.forEach(function(bridge) {
    L.marker(bridge.location)
        .bindPopup(`<b>${bridge.name}</b><br>${bridge.city}<br><i>${bridge.span} meter</i>`)
        .addTo(bridgeMap)
})

// TODO Instead of the default marker, draw a bridge icon as the marker at the bridge locations.
// var bridgeIcon = L.icon({
//     iconUrl: 'bridge.png',
//     iconSize:     [24, 24], // size of the icon
//     iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
//     popupAnchor:  [10, 10] // point from which the popup should open relative to the iconAnchor
// });

let canvas = document.querySelector('#bridge-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'span length (meter)',
            data: [],
            backgroundColor: []
        }]
    }
})

let chartColors = ['red', 'blue', 'yellowgreen', 'green', 'yellow']

bridges.forEach(function(bridge) {
    chart.data.labels.push(bridge.name);
    chart.data.datasets[0].data.push(bridge.span); // Push span length into data array

    let colorCount = chart.data.datasets[0].backgroundColor.length
    let color = chartColors[colorCount % chartColors.length] // use modulo operator to always give valid number
    chart.data.datasets[0].backgroundColor.push(color)
})

chart.update()