angular.module('sampleApp', ['ui.router']);
angular.module('sampleApp').controller("homeController", ['$scope', '$rootScope','$state', function ($scope, $rootScope,$state) {
    	 $rootScope.inicijalizacija = function(){
             $rootScope.product = null;
             $rootScope.shop = null;
             $rootScope.dostavljac=null;
             $rootScope.kategorija=null;
             $rootScope.recenzija = null;
             
         }

         $rootScope.inicijalizacija();
         
    }]);