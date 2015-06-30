mainModule.controller('feedbackpagecontroller',['$scope','$rootScope','localStorageService','$location',function($scope,$rootScope,$location,localStorageService){
console.log("in the feedbackcontroller")
$scope.PhaseId = $rootScope.PhaseId;
$scope.clickedPhaseId=$rootScope.clickedPhaseId;
console.log($scope.clickedPhaseId)
console.log($rootScope.check)
if ( $scope.clickedPhaseId > $scope.PhaseId )
 {
$scope.showMessage="WARNING !!! The Details Of this Phase cannot be displayed !!! The car has not reached the phase yet !!! Click on any of the completed phases to view the details!!";
 }
 
 else if( $scope.PhaseId==5){
  		$scope.showMessage="Click on the corresponding phase to view the details !!! or search for any car  !!";
     }
     else if($rootScope.PresentPhase=="Phase5")
     {
     	$scope.showMessage="There are no car details available!! Please search for some other car!!";
     	$rootScope.PresentPhase="";

     }
else{
	$scope.showMessage=" You can Search for a Car to see the Details OR Click on the details of the car searched to view them!!!";
}


 }]);