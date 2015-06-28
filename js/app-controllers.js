"use strict";

angular.module('app-controllers', [])

    .controller('CatalogController', function ($scope, $http) {
        $http.get('/data/catalog.json')
            .success(function(data, status, headers, config) {
                $scope.books = data;
            })
            .error(function(data, status, headers, config) {
                console.log("HTTP Error: ", data, status, headers, config);
            });

    })

    .controller('BookController', function ($scope, $http, $routeParams) {
        var id = $routeParams.id,
            url = 'data/' + id + '.json';
        $http.get(url)
            .success(function(data, status, headers, config) {
                $scope.book = data;
            })
            .error(function(data, status, headers, config) {
                console.log("HTTP Error: ", data, status, headers, config);
            });

    })

;
