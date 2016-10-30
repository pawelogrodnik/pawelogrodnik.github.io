window.onload = init;

function init() {
    'use strict';

    $.getJSON('https://api.github.com/users/x-formation/repos', function(forks){
		addReposTable(forks);
		addColumnChart(forks);
    });

    $.getJSON('js/contributors.json', function(contributors) {
    	addContributorsTable(contributors);
    	addPieChart(contributors);
    })
}

function addReposTable (data) {
	var tableHeader = ["Repository Name", "Forks"],
		table = document.createElement("table"),
		row = table.insertRow(-1)

		data.sort(function(a,b){
			return b.forks_count - a.forks_count
		})


	for (tableHeaderCell of tableHeader) {
	    var headerCell = document.createElement("th");
	    headerCell.innerHTML = tableHeaderCell;
	    row.appendChild(headerCell);
	}

	for (dataCell of data) {
	    row = table.insertRow(-1);
	    var name = row.insertCell(0);
	    name.innerHTML = "<a class='table-cell' href="+dataCell.html_url+">"+dataCell.name+"</a>";
	    var count = row.insertCell(1);
	    count.innerHTML = dataCell.forks_count;
	}
	$(".forks-table").html(table);
	$(table).addClass("table table-hover");
}

function addContributorsTable (contributors) {
	var tableHeader = ["Username", "Contributions"],
		table = document.createElement("table"),
		row = table.insertRow(-1)

		contributors.sort(function(a,b) {
			return b.contributions - a.contributions
		})


	for (tableHeaderCell of tableHeader) {
	    var headerCell = document.createElement("th");
	    headerCell.innerHTML = tableHeaderCell;
	    row.appendChild(headerCell);
	}

	for (dataCell of contributors) {
	    row = table.insertRow(-1);
	    var name = row.insertCell(0);
	    name.innerHTML = dataCell.nickname;
	    var count = row.insertCell(1);
	    count.innerHTML = dataCell.contributions;
	}
	$(".contributors-table").html(table);
	$(table).addClass("table table-hover");
}

function addColumnChart(data) {
	var chartData = [];

    for (chartdata of data) {
        chartData.push([chartdata.name, parseInt(chartdata.forks_count)]) ;
    }
 
    $('#column-chart').highcharts({
		chart: {
            type: 'column'
        },
        title: {
            text: 'Fork statistics'
        },
        subtitle: {
            text: 'Source: <a href="https://api.github.com/users/x-formation/repos">GitHub</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Forks'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Forks count</b>'
        },
        series: [{
            name: 'Forks Count',
            data: chartData,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}

function addPieChart (data) {
	var chartData = [];

    for (chartdata of data) {
        chartData.push([chartdata.nickname, parseInt(chartdata.contributions)]) ;
    }
     $('#pie-chart').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Contribution shares among users'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: chartData
        }]
    });
}
