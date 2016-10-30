var githubApp = angular.module('githubApp', ['ngRoute', 'ngResource'])

githubApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html'
		})
		.when('/forks', {
			templateUrl: 'templates/forks.html',
			controller: 'forksController'
		})
		.when('/contributions', {
			templateUrl: 'templates/contributions.html',
			controller: 'contributionsController'
		})
})

.controller('forksController', function($scope, $http) {
	$scope.isReverse = true;
	$http.get('https://api.github.com/users/x-formation/repos')
		.success(function(data){
			$scope.forks = data;
			addColumnChart(data);
	 	})
	})

.controller('contributionsController', function($scope, $http) {
	$scope.isReverse = true;
	$http.get('js/contributors.json')
		.success(function(data){
			$scope.contributions = data;
			addPieChart(data);
	   })
	});

function addColumnChart(data) {
	var chartData = [];

	for (chartdata of data) {
		chartData.push([chartdata.name, parseInt(chartdata.forks_count)]) ;
	}
	
	document.getElement
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