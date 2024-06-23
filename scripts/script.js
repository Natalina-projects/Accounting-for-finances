const incomesChart = document.getElementById('pie-chart');
const expensesChart = document.getElementById('pie-chart2');

const incomesChartData = {
    labels: [
        'Red',
        'Orange',
        'Yellow',
        'Green',
        'Blue',
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [100, 300, 100, 70, 200],
        backgroundColor: [
            'rgb(220, 53, 69)',
            'rgb(253, 126, 20)',
            'rgb(255, 193, 7)',
            'rgb(32, 201, 151)',
            'rgb(13, 110, 253)'
        ],
        hoverOffset: 4
    }]
};

const expensesChartData = {
    labels: [
        'Red',
        'Orange',
        'Yellow',
        'Green',
        'Blue',
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 70, 100, 200, 100],
        backgroundColor: [
            'rgb(220, 53, 69)',
            'rgb(253, 126, 20)',
            'rgb(255, 193, 7)',
            'rgb(32, 201, 151)',
            'rgb(13, 110, 253)'
        ],
        hoverOffset: 4
    }]
};

new Chart(incomesChart, {
    type: 'pie',
    data: incomesChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(expensesChart, {
    type: 'pie',
    data: expensesChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});