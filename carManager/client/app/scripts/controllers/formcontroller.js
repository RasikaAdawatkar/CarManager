// var page1=angular.module('page1',[]);
mainModule.controller('formcontroller',['$scope','$rootScope','CarService','localStorageService','$location','$upload',function($scope,$rootScope,CarService,localStorageService,$location,$upload){

$scope.PresentPhase=$rootScope.PresentPhase;
$scope.carId=$rootScope.carId;

var cars=localStorageService.get('cars');   /*to display car name in the form*/
$scope.carName=cars[$scope.carId-1].name;

//$rootScope.formview=0;


/*$scope.onFileSelect=function($files)
{
for (var i = 0; i < $files.length; i++) {
      var file = $files[i];
      $scope.upload = $upload.upload({
        url: 'images/'
       
});
  }
}
*/

 $scope.formSubmit=function(fid)
 {

console.log($scope.car);
console.log(Object.keys($scope.car))
var carId=$rootScope.carId; 

$scope.car.image=$scope.img;  
console.log($scope.car.image)
  	console.log($scope.car)

CarService.updateCar($scope.car,carId,fid);
var cars=localStorageService.get('cars');

  $rootScope.PhaseId = fid + 1;                 // to indicate form submit
  $rootScope.checkPhaseChange=CarService.presentphase;
  console.log( $rootScope.checkPhaseChange);
 console.log($rootScope.PhaseId);
    
 	$rootScope.formview=fid;
  	$rootScope.form_view = fid;

}

	$scope.uploadme = {};
	$scope.uploadme.src = "";


}]);



mainModule.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);