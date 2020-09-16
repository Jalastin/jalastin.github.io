google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Day');
    data.addColumn('number', 'Staff');
    data.addColumn('number', 'Kengo');
    data.addColumn('number', 'Rising Force');
    data.addRows([
        ['', 12774248, 0, 0],
        ['', 14740794, 0, 0],
        ['', 14837748, 0, 0],
        ['', 15004729, 0, 0],
        ['', 15843639, 0, 0],
        ['', 16264453, 0, 0],
        ['', 16515757, 0, 0],
        ['', 17972906, 0, 0],
        ['', 18900670, 0, 0],
        ['', 21091793, 0, 0],
        ['', 0, 27099316, 0],
        ['', 21845289, 25375200, 0],
        ['', 21920248, 0, 0],
        ['', 22740274, 0, 0],
        ['', 26752396, 0, 0],
        ['', 22952983, 27089594, 0],
        ['', 0, 0, 28304360],
        ['', 25864646, 29918693, 30678108],
        ['', 0, 29649949, 0],
        ['', 0, 27992557, 0],
        ['', 0, 0, 31480879],
        ['', 0, 0, 31952071],
        ['', 0, 0, 32437793],
        ['', 0, 0, 34965777],
        ['', 0, 0, 34942216],
        ['', 0, 0, 36185401],
        ['', 0, 0, 36647033],
        ['', 0, 0, 37702847],
        ['', 0, 0, 39890836]
    ]);

     // Set chart options
    var options = {
        'title':'One-Turn Kill (OTK) Damage',
        'chartArea': {'width': '80%', 'height': '80%'},
        bar: {groupWidth:'95%'},
        vAxis: {title: 'Total Damage'},
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