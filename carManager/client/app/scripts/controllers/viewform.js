mainModule.controller('viewformController',['$scope','$rootScope','localStorageService',function($scope,$rootScope,localStorageService) {
/*$rootScope.showOrHide=0;*/
$scope.car_id=$rootScope.carId;console.log($scope.car_id)
$scope.form_view = null ;
var clickedPhaseId=$rootScope.clickedPhaseId;

$scope.form_view = $rootScope.formview; //to display the details in the formview by setting ph accordingly
if($scope.form_view){
	$scope.formclicked = 1;
}

/*$scope.$watch('showOrHide',function()
{
	console.log("show  and hide")
$scope.show_Hide=$rootScope.showOrHide;
console.log($scope.showOrHide)

},true);*/
$scope.$watch('car_id', function (){
	
		if($rootScope.carId){
		console.log("watching carid")
		var cars = localStorageService.get('cars');
		$scope.carName=cars[$scope.car_id-1].name;
		console.log($scope.carName);
//to display the data
         $scope.i=$scope.car_id-1;
         console.log($scope.i);
         $scope.car = cars[$scope.i];
         console.log($scope.car.engine);
     }
})
 



}]);