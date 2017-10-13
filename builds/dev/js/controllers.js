(function(global) {

//main controller
var mainController = angular.module('mainController', []);

//ListController   
mainController.controller('ListController', [
      '$scope',
      '$http',
      '$sce',
       function($scope,$http,$sce) {
         $http.get('js/data.json').then(function(res,status) {
            if(res.status == 200) {
               $scope.users = res.data;
               console.log($scope.users);
            }
            
         }); //$http.get
       
       //page name
       $scope.page = document.location.hash;
       //index
       $scope.idx = $scope.page.indexOf('/') + 1;
       $scope.rem = $scope.page.substring(0,$scope.idx);
       $scope.page = $scope.page.replace($scope.rem,'');
       console.log($scope.page);
   
   
}]); //ListController


//DetailsController   
mainController.controller('DetailsController', [
      '$scope',
      '$http',
      '$sce',
      '$routeParams',
       function($scope,$http,$sce,$routeParams) {
         $http.get('js/data.json').then(function(res,status) {
            if(res.status == 200) {
               $scope.users = res.data;
               $scope.whichUser = $routeParams.userId;
               //not first number
                  if($routeParams.userId > 0) {
                     $scope.prevUser = Number($routeParams.userId) - 1;
                  } 
                  else {
                     $scope.prevUser = $scope.users.length -1;   
                  }
                  
                  //if not the last number
                  if($routeParams.userId < $scope.users.length -1) {
                     $scope.nextUser = Number($routeParams.userId) + 1;
                  }
                  else {
                     $scope.nextUser = 0;
                  }     
            
            }//if 200ok
            
         }); //$http.get
         
       //page name
       $scope.page = document.location.hash;
       //index
       $scope.idx = $scope.page.indexOf('/') + 1;
       $scope.rem = $scope.page.substring(0,$scope.idx);
       $scope.page = $scope.page.replace($scope.rem,'');
       console.log($scope.page);
   
   
}]); //DetailsController



   
   
   
   






   
})(window);
