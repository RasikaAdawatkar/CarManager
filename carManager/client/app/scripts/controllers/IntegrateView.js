mainModule.controller('integratedviewcontroller',['$scope','$rootScope','localStorageService','$http',function($scope,$rootScope,localStorageService,$http){


$scope.loadview=function(){
	if($scope.loadOnclick==1){
		console.log("hub")
		return "views/hubdetails.html";
}
	else if($scope.loadOnclick==2){
		console.log("depot")
		return "views/depotdetails.html";
	}
	else if($scope.loadOnclick==3)
	{
		console.log("district")
         return "views/districtdetails.html";
	}
	else if($scope.loadOnclick==4)
	{
		console.log("back to default")
         return "views/Overview.html";
	}
	else{
		return "views/Overview.html";
	}

}
/*$scope.swapViews=function()	
{
	
	if($scope.loadOnclick==1 && $scope.changetheview==1)
	{
		
		return "views/hubdetails.html";
		
	}
	else if($scope.loadOnclick==1 && $scope.changetheview==1)
	{
		
		return "views/depotdetails.html";
	}
		
		
	else if($scope.loadOnclick==1 && $scope.changetheview==1)
	{   
		
		return "views/districtdetails.html";
		
	}
	else{
		return "views/mapView.html";

	}

	$scope.changetheview=0;
	console.log($scope.changetheview);
}
$scope.changeView=function()
{
	
	$scope.changetheview=1;
	console.log($scope.changetheview)
}*/
$scope.showDefault=1;

}])