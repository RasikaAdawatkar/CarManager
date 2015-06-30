mainModule.controller('overviewcontroller',['$scope','$rootScope','localStorageService','$http',function($scope,$rootScope,localStorageService,$http){
 $http.get('../../JSON/json1.json').success(function(data) {
    
 var struct=data;

/*struct.seriesList[3].data[0]=0;
struct.seriesList[3].data[4]=0;
struct.seriesList[3].data[1]=struct.seriesList[0].data[0]+struct.seriesList[1].data[0]+struct.seriesList[2].data[0]+struct.seriesList[3].data[0];console.log(struct.seriesList[3].data[1]);

 struct.seriesList[3].data[2]=struct.seriesList[0].data[1]+struct.seriesList[1].data[1]+struct.seriesList[2].data[1]+struct.seriesList[3].data[1];console.log(struct.seriesList[3].data[2])
 struct.seriesList[3].data[3]=struct.seriesList[0].data[2]+struct.seriesList[1].data[2]+struct.seriesList[2].data[2]+struct.seriesList[3].data[2];console.log(struct.seriesList[3].data[3])*/
 
 console.log(struct.seriesList)
  $rootScope.seriesData=struct.seriesList;console.log($rootScope.seriesData)
 

$(function () {
    var i=0;
    $('#chart2').highcharts({
    chart: {
            type: 'bar',
            height:200,
          
            
             backgroundColor:'#f2f2f2'
        },
        title: {
            text: '<b>Depots+Hub Costs</b>',
            align:'left',
            y:30,
            useHTML:true,
             
            style:{
            color:'#0066ff',
                fontSize:15
            }
        },
        xAxis: {
            tickWidth:0,
          
            categories:['DEPOT FIXED COSTS','DEPOT SORTING COSTS',' HUB FIXED COSTS',' HUB SORTING COSTS','BASELINE'],
                labels:{
            style:{
                fontSize:10
            }
        }
        },
        yAxis: {
            gridLineWidth:0,
            stackLabels:{
                enabled:'true',
                formatter:function()
                { 
                    console.log(i);
                   var totalVal = this.total - $rootScope.seriesData[3].data[i];
                   i++;
                   if(i == $rootScope.seriesData[3].data.length) i=0;
                   return totalVal;
                 
                }
                
            },
               
            min: 0
         

        },
         credits: {
            enabled: false
        },
        exporting: { enabled: false },
        legend: {
               layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 2,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#F2F2F2'),
         
        
            borderWidth:0
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            },
             bar:{
                borderColor:'#f2f2f2',
                        events: {
            legendItemClick: function () {
                return false; 
            }
        }

            }
            
        },
       
           series:$rootScope.seriesData

     });
});
$('.highcharts-title').click(function(){
    alert('action');
});
  });   /*close http*/



$http.get('../../JSON/json2.json').success(function(data){
var chart2=data;
console.log(chart2.seriesList1);
chart2.seriesList1[2].data[0]=0;console.log(chart2.seriesList1[2].data[0])
chart2.seriesList1[2].data[3]=0;console.log(chart2.seriesList1[2].data[3])
chart2.seriesList1[2].data[1]=chart2.seriesList1[0].data[0]+chart2.seriesList1[1].data[0]+chart2.seriesList1[2].data[0];console.log(chart2.seriesList1[2].data[1])
chart2.seriesList1[2].data[2]=chart2.seriesList1[0].data[1]+chart2.seriesList1[1].data[1]+chart2.seriesList1[2].data[1];console.log(chart2.seriesList1[2].data[2])
console.log(chart2.seriesList1)
$rootScope.chart2Data=chart2.seriesList1;

$(function () {
    var x=0;
    $('#chart1').highcharts({
        chart: {
            type: 'bar',
            height:200,

               backgroundColor:'#f2f2f2'
        },
        title: {
             text: '<b>Transport Costs</b>',
            align:'left',
            y:30,
            style:{
            color:'#0066ff',
                fontSize:15
            }
        },
        xAxis: {
            tickWidth:0,
            categories: ['PRE-RUN', 'MAIN-RUN', 'POST-RUN', 'BASELINE' ],
            labels:{
            style:{
                fontSize:10
            }
        }
        },
        yAxis: {
             gridLineWidth:0,
              stackLabels:{
                enabled:'true',
                formatter:function(){
                     console.log(x);
                   var totalValue = this.total - $rootScope.chart2Data[2].data[x];
                   x++;
                   if(x == $rootScope.chart2Data[2].data.length) x=0;
                   return totalValue;
                   
                }

                
            },
            min: 0
            
        },
        credits: {
            enabled: false
        },
        exporting: { enabled: false },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 10,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#F2F2F2'),
         
        
            borderWidth:0
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            },
            bar:{
                borderColor:'#f2f2f2',
                        events: {
            legendItemClick: function () {
                return false; 
            }
        }

            }
        },
        series: $rootScope.chart2Data
    });
});
$('.highcharts-title').click(function(){
    alert('action');
});
 });  /*close http*/


$scope.hideView=function(){
    $rootScope.hideViewFlag=1;
}
    


}
])