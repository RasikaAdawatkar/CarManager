mainModule.controller('page2controller',['$scope','$rootScope','localStorageService','$route',function($scope,$rootScope,localStorageService,$route){

$rootScope.phases=[{name:"Phase1",id:1},{name:"Phase2",id:2},{name:"Phase3",id:3},{name:"Phase4",id:4}];

$scope.views=["views/viewform1onsubmit.html","views/viewform2onsubmit.html","views/viewform3onsubmit.html","views/viewform4onsubmit.html"];
 //$scope.PresentPhase=$rootScope.PresentPhase;
$scope.carId=$rootScope.carId;
 $scope.PhaseId=$rootScope.PhaseId;console.log( $scope.PhaseId)
 $rootScope.clickedPhaseId="";
/*var cars = localStorageService.get('cars');
console.log(cars);*/
$rootScope.checkPhaseChange=0;                    //to clear the checkphase value so that the current phase of a particular car is not picked up to display the form for the other cars. 

$scope.$watch('checkPhaseChange',function()      //to load the next phase form immediately on the submission 
{    if($rootScope.checkPhaseChange){
	 $scope.PresentPhase=$rootScope.checkPhaseChange;
	
	}
	 else{
	 	$scope.PresentPhase=$rootScope.PresentPhase;
	
	 }

});

	$scope.cars = localStorageService.get('cars');                     
  
  console.log($scope.cars)              
  $scope.names=[];
  var len=$scope.cars.length;
console.log(len);
for(var i=0;i<len;i++){
  $scope.names.push($scope.cars[i].name);}
console.log($scope.names)


$rootScope.ldform=function()
{
    var cars = localStorageService.get('cars');


     if($scope.PresentPhase=="Phase1")
	   {
	   
		console.log($rootScope.checkPhaseChange);     // so that the next car clicked on does not have the same phase as of the previously clicked car
		return"views/form1.html";

        }

	else if ($scope.PresentPhase=="Phase2")
	{
	return"views/form2.html";
    }

	else if ($scope.PresentPhase=="Phase3")
	{
	return"views/form3.html";
    }

	else if ($scope.PresentPhase=="Phase4")
	{
	return"views/form4.html";
    }
	
	else if($scope.PresentPhase=="End")
	{
	return "views/feedbackpage.html";	
	}

	else{
		
		if( $rootScope.clickedPhaseId==1  &&  $rootScope.clickedPhaseId<$scope.PhaseId )  //load filled form data
		{ 
		       
		return "views/viewform1.html";
 		}
 		else if($rootScope.clickedPhaseId==2 && $rootScope.clickedPhaseId<$scope.PhaseId )
 		{
 			
 			return "views/viewform2.html";
 		}
 		else if($rootScope.clickedPhaseId==3 && $rootScope.clickedPhaseId<$scope.PhaseId )
 		{
 			
 		return "views/viewform3.html";	
 		}
 		else if($rootScope.clickedPhaseId==4 && $rootScope.clickedPhaseId<$scope.PhaseId)
 		{
 			
 		return "views/viewform4.html";		
 		}
 		else{ return "views/feedbackpage.html";}
	}

}

$scope.loadform=function(index)
{
$rootScope.clickedPhaseId=$rootScope.phases[index].id; //to get the id of the phase clicked on page2

$scope.PhaseId = $rootScope.PhaseId;//to use it above to load views of the phases not greater than the current phase
		if($rootScope.clickedPhaseId==$scope.PhaseId)
		{

		$scope.PresentPhase=$rootScope.phases[index].name;	
		alert("!!!!!YOU FIRST NEED TO FILL THE FORM INORDER TO VIEW THE DETAILS!!!!!");
		}
		else{
		$scope.PresentPhase="Phase5";	
		
		}
          
        }

$scope.$watch('formview',function(){
console.log("watching")
	$scope.PhaseId=$rootScope.PhaseId;
	console.log($scope.PhaseId)
},true);

$scope.searchCar=function()
	{   
		
	$rootScope.PhaseId=0;
	console.log("searching")
	var cars= localStorageService.get('cars');
	$scope.searchname=$scope.selected2;
	//console.log($scope.searchname)
	var len=$scope.cars.length;console.log(len)

	for(var i=0;i<len;i++)
	{
		 var str1=cars[i].name; console.log(str1)
		// var str1="ab";
		// var str2="ab";
		 var str2=$scope.selected2; console.log(str2)
		 var result=(str1).localeCompare(str2);
		 if(result==0)
		 	{ 
		 	console.log("strings are same")
		 	$route.reload();
		 	$rootScope.PhaseId=cars[i].PhaseId;console.log($rootScope.PhaseId)
		 	if($rootScope.PhaseId==1){$rootScope.PresentPhase="Phase5";}
		 	$rootScope.carId=cars[i].carId;console.log($rootScope.carId)
		 	$rootScope.search=$rootScope.carId;

		 	break;
		 	}
		 else{continue;}
		 break;
	}
	$scope.$watch('search',function(){
    console.log("search successful")

    $rootScope.carId = $rootScope.search;console.log( $rootScope.carId)
	$scope.PhaseId=$rootScope.PhaseId;
	console.log($scope.PhaseId)
     },true);
	$scope.selected2="";               
}

	
	$scope.display_modal=function(index)
	{
      var cars= localStorageService.get('cars');
      
      $scope.carName=cars[$scope.carId-1].name;
      var i= $scope.carId-1;
      $scope.phaseName="PHASE"+" "+(index+1);
      if(index==0)
      {
      	
      	$scope.modal_title="DESIGN";
      	$scope.spec1="Engine";$scope.spec2="Battery";$scope.spec3="Charger";$scope.spec4="Drive";$scope.spec5="Chassis";$scope.spec6="Power";
        $scope.data1=cars[i].engine;$scope.data2=cars[i].battery;$scope.data3=cars[i].charger;$scope.data4=cars[i].drive;
        $scope.data5=cars[i].chassis;$scope.data6=cars[i].power;
      }
      else if(index==1)
      {
      	$scope.modal_title="ASSEMBLING";
      	$scope.spec1="Brakes";$scope.spec2="Suspension";$scope.spec3="Steering";$scope.spec4="Wheels";$scope.spec5="Tire Size";$scope.spec6="Range";
        $scope.data1=cars[i].brakes;$scope.data2=cars[i].suspension;$scope.data3=cars[i].steering;$scope.data4=cars[i].wheels;
        $scope.data5=cars[i].tire_size;$scope.data6=cars[i].range;
      }
      else if(index==2)
		{
		$scope.modal_title="MANUFACTURING";
      	$scope.spec1="Width";$scope.spec2="Length";$scope.spec3="Height";$scope.spec4="Payload";$scope.spec5="Weight";$scope.spec6="Wheelbase";
        $scope.data1=cars[i].Width;$scope.data2=cars[i].Length;$scope.data3=cars[i].Height;$scope.data4=cars[i].payload;
        $scope.data5=cars[i].weight;$scope.data6=cars[i].wheelbase;	
		}
		else if(index==3)
		{
		$scope.modal_title="LAUNCH";
      	$scope.spec1="Fuel Type";$scope.spec2="Torque";$scope.spec3="Boot Space";$scope.spec4="Top Speed";$scope.spec5="Capacity";$scope.spec6="Price";
        $scope.data1=cars[i].fuel_type;$scope.data2=cars[i].torque;$scope.data3=cars[i].boot_space;$scope.data4=cars[i].top_speed;
        $scope.data5=cars[i].capacity;$scope.data6=cars[i].turning_radius;	
		}
		else{
			$scope.modal_title="no such phase";
		}
	}

}]);

mainModule.directive('ngEnter', function () {
    return function (scope, element, attrs) {
		element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
 
                event.preventDefault();
            }
        });
    };
});
