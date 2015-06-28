"use strict";

angular.module('app', [
    'app-controllers',
    'app-services',
    'app-filters',
    'app-directives',
    'ngRoute'
])

    .config(function ($routeProvider) {

        $routeProvider.when('/catalog', {
            templateUrl: 'templates/catalog.html',
            controller: 'CatalogController'
        });

        $routeProvider.otherwise({
            redirectTo: '/catalog'
        });

    })

;
