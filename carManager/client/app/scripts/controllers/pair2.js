mainModule.controller('pair2controller',['$scope','$rootScope','localStorageService','$http',function($scope,$rootScope,localStorageService,$http){


           $scope.arrItems =[{color:"red",id:1},{color:"blue",id:2},{color:"green",id:3},{color:"yellow",id:4}]; 
          
           //$scope.myColor1=" "; $scope.myColor2=" "; $scope.myColor3=" "; $scope.myColor4=" ";
 
   var compareArr=[];  
   console.log(compareArr.length)

/*$scope.removeClicked=function(index){
console.log(index)	
i++;
console.log(i)
if(i==1){

var element1= $scope.arrItems[index].color;
compareArr.push(element1);
}
else if(i==3){
var element2=$scope.arrItems[index].color;	
 compareArr.push(element2);
var string1=compareArr[0];
 var result=(element2).localeCompare(string1);
 console.log(result)
 if(result==0){alert("u chose the same element")}
 	 console.log(compareArr);     
 	
 	i=-1;
 	 compareArr.length=0;
 	console.log(compareArr)
}
 
  
   
    }    */

/*
$scope.removeClicked=function(index){
console.log(index)	
i++;
console.log(i)
if(i==1){

var element1= $scope.arrItems[index].color;
compareArr.push(element1);
}
else if(i==3){
var element2=$scope.arrItems[index].color;	
 compareArr.push(element2);

}
}
$scope.checkForDuality=function(){
var string1=compareArr[0];
 var element2=compareArr[1];
 var result=(element2).localeCompare(string1);
 console.log(result)
 if(result==0){alert("u chose the same element")}
 	 console.log(compareArr);     
 	
 	i=-1;
 	 compareArr.length=0;
 	console.log(compareArr)

 
}  */
   
    
/*$scope.removeClicked=function(index){
console.log(index)	
i++;
console.log(i)
if(i%2 !=0){
var element=$scope.arrItems[index].color;

compareArr.push(element);
console.log(compareArr)
}

}
$scope.checkForDuality=function(){
for(var x=0;x<compareArr.length;x++){
var	string1=compareArr[x];

var string2=compareArr[x++];

 var result=(string1).localeCompare(string2);

 console.log(result)
 if(result==0){
 	alert("u chose the same element") ;
 	break;
}
}
 console.log(compareArr);     
 	
 	
 	 compareArr.length=0;
 	console.log(compareArr)

 	} 
 	
 */
 /*$scope.removeClicked=function(index){
console.log(index)	

var element=$scope.arrItems[index].color;

compareArr.push(element);
console.log(compareArr)


}
$scope.checkForDuality=function(){
for(var x=0;x<compareArr.length;x++){
var	string1=compareArr[x];

var string2=compareArr[x++];

 var result=(string1).localeCompare(string2);
 
 console.log(result)
 if(result==0){
 	alert("u chose the same element/elements") ;
 	break;
}
}
 console.log(compareArr);     
 	
 	
 	 compareArr.length=0;
 	console.log(compareArr)

 	} */

$scope.removeClicked=function(index,id){

compareArr[id]=index;


console.log(compareArr[id])

}
$scope.checkForDuality=function(){
console.log(compareArr.length)
for(var x=0;x<compareArr.length;x++){
	for(var y=1;(y<compareArr.length);y++){
		if(y!=x){
var id1=compareArr[x];
console.log(id1)
var id2=compareArr[y];
console.log(id2)
if(id1==id2 && x<y && id2 !=null)
 
 {
alert("u chose the same element/elements") ;
var checked=1;
break;

}
 	}
 	else {continue;}
 }
if(checked==1)
{
	break;
}
}
$scope.myColor1=" "; $scope.myColor2=" "; $scope.myColor3=" "; $scope.myColor4=" ";
compareArr.length=0;

console.log(compareArr)

 }
}])