(function(global) {

//main controller
var mainController = angular.module('mainController', []);

//ListController   
mainController.controller('ListController', [
'$scope',
'$http',
'$sce',
 function($scope,$http,$sce) {
   
   $http.get('https://api.github.com/users?callback=cusers')
   .then(function(cusers) {
      $scope.response = cusers;
      console.log($scope.response);
   });
   
   
   
      
      
         
            
            
}]); //ListController
   
  

   
   
   
   
   
   
   









//DetailsController   
// mainController.controller('DetailsController', [
//       '$scope',
//       '$http',
//       '$sce',
//       '$routeParams',
//        function($scope,$http,$sce,$routeParams) {
//          $http.get('js/data.json').then(function(res,status) {
//             if(res.status == 200) {
//                $scope.users = res.data;
//                $scope.whichUser = $routeParams.userId;
//                //not first number
//                   if($routeParams.userId > 0) {
//                      $scope.prevUser = Number($routeParams.userId) - 1;
//                   } 
//                   else {
//                      $scope.prevUser = $scope.users.length -1;   
//                   }
                  
//                   //if not the last number
//                   if($routeParams.userId < $scope.users.length -1) {
//                      $scope.nextUser = Number($routeParams.userId) + 1;
//                   }
//                   else {
//                      $scope.nextUser = 0;
//                   }     
            
//             }//if 200ok
            
//          }); //$http.get
   
   
// }]); //DetailsController



   
   
   
   






   
})(window);
