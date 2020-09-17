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
        'legend': {'position':'bottom'},
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

    //data.addColumn('number', 'Day');
    //data.addColumn('number', 'Staff');
    //data.addColumn('number', 'Kengo');
    //data.addColumn('number', 'Rising Force');
    //data.addRows([
        //[0, 12774248, 0, 0],
        //[2, 14740794, 0, 0],
        //[9, 14837748, 0, 0],
        //[10, 15004729, 0, 0],
        //[14, 15843639, 0, 0],
        //[14, 16264453, 0, 0],
        //[21, 16515757, 0, 0],
        //[21, 17972906, 0, 0],
        //[22, 18900670, 0, 0],
        //[27, 21091793, 0, 0],
        //[38, 0, 27099316, 0],
        //[62, 21845289, 25375200, 0],
        //[64, 21920248, 0, 0],
        //[64, 22740274, 0, 0],
        //[82, 26752396, 0, 0],
        //[83, 22952983, 27089594, 0],
        //[93, 0, 0, 28304360],
        //[96, 25864646, 29918693, 30678108],
        //[112, 0, 29649949, 0],
        //[114, 0, 27992557, 0],
        //[115, 0, 0, 31480879],
        //[115, 0, 0, 31952071],
        //[126, 0, 0, 32437793],
        //[130, 0, 0, 34965777],
        //[130, 0, 0, 34942216],
        //[135, 0, 0, 36185401],
        //[186, 0, 0, 36647033],
        //[236, 0, 0, 37702847],
        //[268, 0, 0, 39890836]
    //]);