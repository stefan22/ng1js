(function(global) {

//app module
var app;
global.app = angular.module('app', [
      'ngRoute',
      'mainController'                      
   
   
]);

//routes
global.app.config(['$routeProvider', function($routeProvider) {
   
   $routeProvider.
      when('/list', {
         templateUrl: 'partials/list.html',
         controller:  'ListController'
      }).
      when('/details/:userId', {
         templateUrl: 'partials/details.html',
         controller:  'DetailsController'
      }).
      otherwise({
         redirectTo:  '/list'
      });
   
   
   
   
   
}]);//$routeProvider


   
 
 
 


   
})(window);

