google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Date');
    data.addColumn('number', 'Total Damage');
    data.addRows([
        ['', 12774248],
        ['', 14740794],
        ['', 15004729],
        ['', 15843639],
        ['', 16264453],
        ['', 16515757],
        ['', 17972906],
        ['', 18900670],
        ['', 21091793],
        ['', 27099316],
        ['', 21845289],
        ['', 25375200],
        ['', 21920248],
        ['', 22740274],
        ['', 26752396],
        ['', 22952983],
        ['', 27089594],
        ['', 28304360],
        ['', 25864646],
        ['', 29918693],
        ['', 30678108],
        ['', 29649949],
        ['', 27992557],
        ['', 31480879],
        ['', 31952071],
        ['', 32437793],
        ['', 34965777],
        ['', 34942216],
        ['', 36185401],
        ['', 36647033],
        ['', 37702847],
        ['', 39890836]
    ]);

     // Set chart options
    var options = {
        'title':'One-Turn Kill (OTK) Damage',
        'legend':'none',
        height: $(window).height()*0.75
    }

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('myChart'));
    chart.draw(data, options);

    // Responsively resize graph
    $(window).resize(function(){
        drawChart();
    });
}

