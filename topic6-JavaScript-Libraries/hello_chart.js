let canvas = document.querySelector('#soda-chart') // save canvas object as a variable
let context = canvas.getContext('2d') // set a context for the canvas

// create a chart
let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['Coke', 'Pepsi', 'Sprit', 'Either', 'Neither'],
        datasets: [{
            label: 'Number of votes',
            data: [10, 14, 7, 5, 8],
            backgroundColor: ['red', 'blue', 'yellowgreen', 'green', 'yellow']
        } ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                    // Note: in the latest version of ChartJS, the begin at zero is not needed.
                    // The default charts have the Y axis configured to start at zero.
                }
            }]
        }
    }
})