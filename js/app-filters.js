"use strict";

angular.module('app-filters', [])

    .filter('range', function ($parse) {
        return function(array,expression, min, max) {
            var getter = $parse(expression);
            return array && array.filter(function (item) {
                var value = getter(item),
                    okMin = !min || value >= min,
                    okMax = !max || value <= max;
                return okMin && okMax;
            });
        };
    })

;
