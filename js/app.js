"use strict";

angular.module('app', [
    'app-controllers',
    'app-services',
    'app-filters',
    'app-directives',
    'ngRoute',
    'ngSanitize'
])

    .config(function ($routeProvider) {

        $routeProvider.when('/catalog', {
            templateUrl: 'templates/catalog.html',
            controller: 'CatalogController'
        });

        $routeProvider.when('/book/:id', {
            templateUrl: 'templates/book.html',
            controller: 'BookController'
        });

        $routeProvider.otherwise({
            redirectTo: '/catalog'
        });

    })

;
