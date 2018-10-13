require([
    'googleCharts', 'values'], function()
{

  google.charts.load('current', {packages: ['corechart', 'line']});
  google.charts.setOnLoadCallback(drawBasic);

  function drawBasic() {

    var data = new google.visualization.DataTable();

    // set up columns (1 for date, 1 for value)
    values.quotes.cols.forEach( (column) => {
    data.addColumn(column.type, column.label);
    });

    // TODO find specific date in values

    // latest : put this somewhere else
    function getLatest(){
      let latest = data.quotes.rows[ Object.keys(data.quotes.rows).sort().pop() ];
      let date = new Date(1000 * latest.c[0].v);
      let value = latest.c[1].v;
      return {date: date, value: value};
    }


    // set up rows (insert data)
    for (key in values.quotes.rows) {
      let row = values.quotes.rows[key];
      let date = new Date(1e3 * row.c[0].v);
      let value = parseFloat(row.c[1].v);
      let entry = [];
      entry.push(date);
      entry.push(value);
      data.addRow(entry);
    }

    var options = {
      fontName: "Roboto",
      title: null,
      width: "100%",
      height: 244,
      backgroundColor: "#f5f5f5",
      colors: ["#00abe9", "#ffd200", "#ff6600"],
      chartArea: {
        top: 20,
        left: 60,
        width: "85%",
        height: "70%",
        backgroundColor: {
          fill: "#f5f5f5"
        }
      },
      legend: {
        position: "bottom",
        maxLines: 3
      },
      lineWidth: 1.75,
      vAxis: {
        title: "Koers",
        minorGridlines: {
          count: 0
        }
      },
      interpolateNulls: !0,
      tooltip: {
        textStyle: {
        }
      }
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(data, options);
  }

});
