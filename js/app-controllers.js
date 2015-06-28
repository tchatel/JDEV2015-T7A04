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

;
