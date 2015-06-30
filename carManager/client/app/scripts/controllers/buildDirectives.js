


/*  
mainModule.directive('dragDis',function(){
  	return{
  		
  		link: function(element,scope,attrs){
        alert(" in the directive");
  			element.bind("click",function(){
  				
  					alert("the div was clicked");
  			
  			})
  		}
  	}
  });*/




mainModule.directive('drag', function () {
    return{
      restrict:'A',
    link: function (scope, element, attrs) {
      console.log("directive")
    element.bind("click", function () {

            element.draggable({
        revert:true
      });
                });
 
                
            }
          }
        });
    

