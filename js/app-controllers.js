"use strict";

angular.module('app-controllers', [])

    .controller('HeadController', function ($scope, pageInfo) {
        $scope.getPageTitle = function () {
            return pageInfo.title;
        };
    })

    .controller('CatalogController', function ($scope, $http, pageInfo, sortOptions, state) {
        $scope.state = state('/catalog', {
            sort: sortOptions[0]
        });
        $scope.sortOptions = sortOptions;

        $http.get('/data/catalog.json')
            .success(function(data, status, headers, config) {
                $scope.books = data;
            })
            .error(function(data, status, headers, config) {
                console.log("HTTP Error: ", data, status, headers, config);
            });
        pageInfo.title = "Catalogue des livres";
    })

    .controller('BookController', function ($scope, $http, $routeParams, pageInfo, cart, $location) {
        var id = $routeParams.id,
            url = 'data/' + id + '.json';
        $http.get(url)
            .success(function(data, status, headers, config) {
                $scope.book = data;
                pageInfo.title = "Livre:" + $scope.book.title;
            })
            .error(function(data, status, headers, config) {
                console.log("HTTP Error: ", data, status, headers, config);
            });
        $scope.buy = function (book) {
            cart.add(book);
            $location.url('/cart');
        };
    })

    .controller('CartController', function ($scope, pageInfo, cart) {
        pageInfo.title = "Panier";
        $scope.cart = cart;
    })

;
