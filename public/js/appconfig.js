angular.module('sampleApp').config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

    	  $urlRouterProvider.otherwise('/home');
        $stateProvider
          .state('home', {
              url: '/home',
              views: {
                  'navbar': {
                      templateUrl: 'partials/navbar.html',
                      controller: 'navbarController'
                  }
              }
          })
         

        
    }])