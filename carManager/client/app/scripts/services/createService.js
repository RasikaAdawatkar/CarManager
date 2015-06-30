mainModule.service('CarService', function(localStorageService) {
//var id=0;
	  
	this.addCar = function(car) {
		// id +=1;
		var cars = localStorageService.get('cars');
var len=cars.length;
if(len==0)
  {var id=0;id+=1;}
else{id=len+1;}
   car.carId = id;
		console.log(car.carId);
		console.log(car.name);
		cars.push(car);
		localStorageService.set('cars', cars);
   
  }

	this.getAllCars = function () {
		var cars = localStorageService.get('cars');
		return cars;
	}
 
    this.findCarById = function(id) {
    	var carobj = null;
      var cars = localStorageService.get('cars');
      angular.forEach(cars,function(car) {
      	//console.log(car);
        if(car.carId == id) {
        	console.log('yes')
        	carobj = car;
        }
      })
      return carobj
    }

 	this.updateCar=function(car,carId,pid,image){
 		
   console.log('update called');
 		var cars = localStorageService.get('cars');
 		
 		i=carId-1;
      console.log(i)
      for(var key in car){
        console.log(i)
        cars[i][key] = car[key];
      }
     
 	   if(pid<4)
 	   {
 	   cars[i].PresentPhase='Phase'+(pid+1);  // to change the phase name after the submission of the form
     this.presentphase=cars[i].PresentPhase;
 	   }
        else
        {
        cars[i].PresentPhase='End';	
        this.presentphase=cars[i].PresentPhase;
        }


      if(cars[i].PhaseId<=4)
      {                            //to change the phaseId after submitting the form
        cars[i].PhaseId+=1;
      }
    
     localStorageService.set('cars',cars);
 	   console.log(cars);
 	
}
 
});