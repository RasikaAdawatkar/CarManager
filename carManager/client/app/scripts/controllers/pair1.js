mainModule.controller('pair1controller',['$scope','$rootScope','localStorageService','$http',function($scope,$rootScope,localStorageService,$http){
$http.get('../../JSON/chartpair11.json').success(function(data){
var datapair11=data;
$rootScope.datapair11=datapair11.chartpair11;
$(function () {
    $('#leftChart').highcharts({
        chart: {
            type: 'column',
            height:280,
            width:340,
            backgroundColor:'#f2f2f2'
        },
        title: {
            text: 'Vehicles',
             align:'left',
            y:11,
            x:30,
            style:{
            "fontSize":"15"
              
        }
        },
         legend: {
               layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 8,
            y: -5,
            floating: true,
            borderWidth: 1,
            backgroundColor:'#f2f2f2',
         
        
            borderWidth:0
        },
        xAxis: {
            categories: [
                'Vehicle A',
                'Vehicle B',
                'Vehicle C',
                'Vehicle D'
                ],
            tickWidth:0
            
            
        },
        exporting: { enabled: false },
        yAxis: {
            min: 0,
            gridLineWidth:0
           
        },
        credits: {
            enabled: false
        },
       
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 2
            }
        },
        series: $rootScope.datapair11
    });
});
});

$http.get('../../JSON/chartpair12.json').success(function(data){
var datapair12=data;
$rootScope.datapair12=datapair12.chartpair12;
$(function () {
    $('#rightChart').highcharts({
        chart: {
            type: 'column',
            height:280,
            width:340,
              backgroundColor:'#f2f2f2'
        },
        title: {
            text: 'Transport Costs',
            align:'left',
            y:11,
            x:30,
              style:{
            "fontSize":"15"
              
        }
        },
         exporting: { enabled: false },
        xAxis: {
            categories: ['Vehicle A','Vehicle B', 'Vehicle C', 'Vehicle D'],
             tickWidth:0
        },
        yAxis: {
            min: 0,
            gridLineWidth:0,
            stackLabels: {
               
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
           legend: {
               layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -5,
            y: -8,
            floating: true,
            borderWidth: 1,
            backgroundColor:'#f2f2f2',
         
        
            borderWidth:0
        },
        credits:{
            enabled:false
        },
       
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                   
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black, 0 0 3px black'
                    }
                }
            }
        },
        series: $rootScope.datapair12
    });
});
});

}])






































