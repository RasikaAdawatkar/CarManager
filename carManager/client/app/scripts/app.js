var mainModule= angular.module('mainModule',['ngRoute','LocalStorageModule','angularFileUpload']);

mainModule.config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])


mainModule.config(['$routeProvider',function($routeProvider){
	$routeProvider
	    .when('/',
	    {
        templateUrl: 'views/page1.html',
        controller: 'page1controller'
	    })
		
	    .when('/page2',
	    {
		templateUrl:'views/page2.html',
		controller:'page2controller'

	    })

	    .when('/page3',
	    {
		templateUrl:'views/Overview.html',
		controller:'overviewcontroller'

	    })
	    .when('/page4',
	    {
		templateUrl:'views/IntegrateView.html',
		controller:'integratedviewcontroller'

	    })
	    .when('/page5',
	    {
		templateUrl:'views/pair1.html',
		controller:'pair1controller'

	    })
	     .when('/page6',
	    {
		templateUrl:'views/pair2.html',
		controller:'pair2controller'

	    })
	      .when('/page7',
	    {
		templateUrl:'views/new.html',
		controller:'newcontroller'

	    })
	        .when('/page8',
	    {
		templateUrl:'views/buildDirectives.html'

	    })

	    .otherwise({redirectTo: '/'});
}]);

