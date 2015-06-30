// var page1 = angular.module('page1',[]);
mainModule.controller('page1controller',['$scope','$rootScope','$location','CarService','localStorageService',function($scope,$rootScope,$location,CarService,localStorageService) {

    //$scope.imgsrc = "../images/car2.jpg";
  /*  $scope.basicDetails=function()
    {
      console.log($scope.basic1)  ;
      console.log($scope.basic2)  ;
      console.log($scope.basic3)  ;
      console.log($scope.basic4);
    }
*/


    var setCarStorage = function() {
    	
    	if(localStorageService.get('cars') == null) {
    		localStorageService.set('cars', []);
    	}
    }

  	setCarStorage();
  	$scope.cars = localStorageService.get('cars');                     /*to display all cars on the first page on  
  	                                                                      viewing for the first time*/
  
  console.log($scope.cars)              //to be able to search on the first visit and after adding cars
  $scope.names=[];
  var len=$scope.cars.length;
console.log(len);
for(var i=0;i<len;i++){
  $scope.names.push($scope.cars[i].name);}
console.log($scope.names)


  $scope.add = function() {
    var cars=localStorageService.get('cars');
  var len=$scope.cars.length;console.log(len)
 
  for(var i=0;i<len;i++)
  {
  var strng1=cars[i].name; console.log(strng1)
  var strng2=$scope.newcar;console.log(strng2);
  var result=(strng1).localeCompare(strng2);console.log(result);
  if(result==0){break;}else{continue;}
  break;
}
  if(result!=0){

  //  $rootScope.carname=$scope.newcar;
 
		var car = { name: $scope.newcar, PresentPhase: "Phase1",PhaseId:1};
		
		CarService.addCar(car);
		$scope.cars = localStorageService.get('cars');

		$scope.cars = CarService.getAllCars();  
                                                                           // to display all cars on adding a new car
         $scope.newcar="";                                               // to clear the input area after clicking 

      console.log($rootScope.carname)
    $rootScope.done=$scope.cars;
   //localStorageService.clearAll();
 }
 else{$scope.displayMessage="This car already Exists!!! Please enter another Car!!";
      $scope.newcar="";
      $scope.same=1;
      document.getElementById("page").style.opacity=".85";
      }
/* else{$scope.newcar="";$scope.same=1;
  $scope.showPopup=function(){
  if($scope.phchk==1||$scope.same==1)
    {  return "views/popup.html"   ; }

}}*/

 }


$rootScope.selectPhase = function(car) {
	 	
	    carobj = CarService.findCarById(car.carId);
		
	   $rootScope.PresentPhase = carobj.PresentPhase;
	   console.log( $rootScope.PresentPhase);
	    $rootScope.carId = carobj.carId;
	   
	    $rootScope.PhaseId = carobj.PhaseId;
 		
 		
	    $location.path("/page2");
        console.log($rootScope.formview);
        console.log($rootScope.carId);
        
		}
$scope.closeMessage=function(){

document.getElementById("page").style.opacity="1";
  $scope.same=0;
  $scope.chk=0;
}

    $scope.search=function()
    {

     $rootScope.PhaseId=0;
  console.log("searching")
  var cars= localStorageService.get('cars');
  $scope.searchCar=$scope.selected1;
  //console.log($scope.searchname)
  var len=$scope.cars.length;console.log(len)

  for(var i=0;i<len;i++)
  {
     var str1=cars[i].name; console.log(str1)
    // var str1="ab";
    // var str2="ab";
     var str2=$scope.selected1; console.log(str2)
     var result=(str1).localeCompare(str2);
     if(result==0)
      { 
      console.log("strings are same")
      //$route.reload();
      $rootScope.PhaseId=cars[i].PhaseId;
      $rootScope.carId=cars[i].carId; console.log($rootScope.carId)
      $rootScope.search=$rootScope.carId;
       if($rootScope.PhaseId==1)
        { $scope.selected1=""; 
          $scope.displayMessage="There are no details of this car present!!! Please search for some other car.";
          $scope.phchk=1;
          $scope.chk=1;
         document.getElementById("page").style.opacity=".85";
        }
       $scope.check=1;
console.log(cars[$rootScope.carId-1].image.src)
$scope.imgsrc=cars[$rootScope.carId-1].image.src;
console.log($scope.imgsrc);
$scope.carname=cars[$rootScope.carId-1].name; console.log($scope.carname)
   $scope.carphase=cars[$rootScope.carId-1].PresentPhase;
    $scope.type=cars[$rootScope.carId-1].type;
    $scope.color=cars[$rootScope.carId-1].color;
    $scope.mileage=cars[$rootScope.carId-1].mileage;
    $scope.price=cars[$rootScope.carId-1].price;
      break;
      }
     else{continue;}
     break;
  }
/*  $scope.$watch('search',function(){
    console.log("search successful")

    $rootScope.carId = $rootScope.search;  console.log( $rootScope.carId)
     },true);*/
  $scope.selected1="";      
    }



}]);

		

    mainModule.directive('autoComplete', function($timeout) {
    return function(scope, iElement, iAttrs) {
     
            iElement.autocomplete({

                source: scope[iAttrs.uiItems],
                select: function() {
                    $timeout(function() {

                      iElement.trigger('input');
                    }, 0);
                }
            });
    };
});