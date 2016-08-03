var app = angular.module('portfolio', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/portfolio');

    $stateProvider

        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'app/views/partial-portfolio.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'app/views/partial-about.html'
        })

});