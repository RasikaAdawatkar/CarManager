mainModule.controller('hubdetailsviewcontroller',['$scope','$rootScope','localStorageService','$http',function($scope,$rootScope,localStorageService,$http){
	$(function () {
    $('#loadChart1').highcharts({
        chart: {
            type: 'column',
            height:200,
            width:177,
             backgroundColor:'#f2f2f2'
        },
        title: {
            text: 'INWARD ARRIVAL TIME',
            style:
            {
                fontSize:'10'
            }

            
        },
      
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May'

            ],
             labels:{
                
                style:{
                    fontSize:'10'
                }
            },
            
             tickWidth:'0'
        },
        credits:{
            enabled:false
        },
         exporting: { enabled: false },
        yAxis: {
            min: 0,
            gridLineWidth:0,
            labels:{
                enabled:false
            },
            title:{
                enabled:false
            }
        },
       
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2,100]

        }]
    });
});

$(function () {
    $('#loadChart2').highcharts({
        chart: {
            type: 'column',
            height:200,
            width:180,
            backgroundColor:'#f2f2f2'
        },
        title: {
            text: 'INWARD DEPARTURE TIME',
            style:
            {
                fontSize:'10'
            }

            
        },
      
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May'

            ],
             labels:{
                
                style:{
                    fontSize:'10'
                }
            },
            
             tickWidth:'0'
        },
        credits:{
            enabled:false
        },
         exporting: { enabled: false },
        yAxis: {
            min: 0,
             gridLineWidth:0,
             labels:{
                enabled:false
            },
            title:{
                enabled:false
            }
        },
       
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'USA',
            data: [51, 51, 90, 100,75]

        }]
    });
});

$(function () {
    $('#loadChart3').highcharts({
        chart: {
            type: 'column',
            height:199,
            width:177,
             backgroundColor:'#f2f2f2'
        },
        title: {
            text: 'OUTWARD ARRIVAL TIME',
            style:
            {
                fontSize:'10'
            }

            
        },
      
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May'

            ],
             labels:{
                
                style:{
                    fontSize:'10'
                }
            },
            
             tickWidth:'0'
        },
        credits:{
            enabled:false
        },
         exporting: { enabled: false },
        yAxis: {
            min: 0,
             gridLineWidth:0,
             labels:{
                enabled:false
            },
            title:{
                enabled:false
            }
        },
       
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Canada',
            data: [20.9, 31.5, 90.4, 40.2,100]

        }]
    });
});


$(function () {
    $('#loadChart4').highcharts({
        chart: {
            type: 'column',
            height:199,
            width:180,
             backgroundColor:'#f2f2f2'
        },
        title: {
            text: 'OUTWARD DEPARTURE TIME',
            style:
            {
                fontSize:'10'
            }

            
        },
      
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May'

            ],
             labels:{
                
                style:{
                    fontSize:'10'
                }
            },
            
             tickWidth:'0'
        },
        credits:{
            enabled:false
        },
         exporting: { enabled: false },
        yAxis: {
            min: 0,
             gridLineWidth:0,
             labels:{
                enabled:false
            },
            title:{
                enabled:false
            }
        },
       
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Brazil',
            data: [90.9, 31.5, 120.4, 40.2,50]

        }]
    });
});

	
}])