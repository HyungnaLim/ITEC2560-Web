let areaCenter = [39, -98]
let zoom = 4

let bridgeMap = L.map('bridge-map').setView(areaCenter, zoom)

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap)  // add the tileLayer to the bridge map

// array of bridge object storing information of each bridge
bridges = [
    {"name":"Verrazano-Narrows Bridge", "location": [40.6066, -74.0447], "city": "New York, NY", "span": 1298.4},
    {"name":"Golden Gate Bridge", "location": [37.8199, -122.4783], "city": "San Francisco and Marin, CA", "span": 1280.2},
    {"name":"Mackinac Bridge", "location": [45.8174, -84.7278], "city": "Mackinaw and St Ignace, MI", "span": 1158.0},
    {"name":"George Washington Bridge", "location": [40.8517, -73.9527], "city": "New York, NY and New Jersey, NJ", "span": 1067.0},
    {"name":"Tacoma Narrows Bridge", "location": [47.2690, -122.5517], "city": "Tacoma and Kitsap, WA", "span": 853.44},
]

// marker icon for bridges
var bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    popupAnchor:  [12, 5] // point from which the popup should open relative to the iconAnchor
});

// red color marker icon for the longest bridge
var longestBridgeIcon = L.icon({
    iconUrl: 'bridge-longest.png',
    iconSize:     [24, 24],
    iconAnchor:   [0, 0],
    popupAnchor:  [12, 5]
});

// find the longest bridge from the array
let longestBridge = bridges.reduce((prev, current) => (prev.span > current.span) ? prev : current);

// create marker on map for each bridge in the array using loop
bridges.forEach(function(bridge) {
    if (bridge === longestBridge) { // assign a different color marker for the longest bridge
        L.marker(bridge.location, {icon: longestBridgeIcon})
            .bindPopup(`<b>${bridge.name}</b><br>${bridge.city}<br><i>${bridge.span} meter</i>`)
            .addTo(bridgeMap)
    } else {
        L.marker(bridge.location, {icon: bridgeIcon})
            .bindPopup(`<b>${bridge.name}</b><br>${bridge.city}<br><i>${bridge.span} meter</i>`)
            .addTo(bridgeMap)
    }
})

let canvas = document.querySelector('#bridge-chart') // find canvas and set aa a variable
let context = canvas.getContext('2d') // set the context of chart

// create a bat chart
let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: [], // set an empty array to collect labels
        datasets: [{
            label: 'span length (meter)',
            data: [], // set an empty array to collect data
            backgroundColor: [] // set an empty array to collect colors
        }]
    }
})

// set the array of colors for each bar in chart
let chartColors = ['darkblue', 'blue', 'steelblue', 'skyblue', 'lightblue']

// add each bridge data to the chart using loop
bridges.forEach(function(bridge) {
    chart.data.labels.push(bridge.name); // push bridge name into labels array
    chart.data.datasets[0].data.push(bridge.span); // Push bridge span into data array

    // set a counter based on length of backgroundColor array to use as an index number
    let colorCount = chart.data.datasets[0].backgroundColor.length
    // get a color from the chartColors array using ColorCounter as an index, use modulo operator to always give valid index
    let color = chartColors[colorCount % chartColors.length]
    chart.data.datasets[0].backgroundColor.push(color) // push the color
})

chart.update() // update the chart