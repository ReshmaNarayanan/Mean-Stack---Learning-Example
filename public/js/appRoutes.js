angular.module('appRoutes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'MainController'
            })
            .state('resources', {
                url: '/resources',
                templateUrl: 'views/resources.html',
                controller: 'ResourceController'
            });

        $urlRouterProvider.otherwise("/resources");
    }
]);