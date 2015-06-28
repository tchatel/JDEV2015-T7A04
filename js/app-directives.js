"use strict";

angular.module('app-directives', [])

    .directive('rating', function () {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var img = '<img src="img/star.png"/>',
                    html = '';
                scope.$watch(attrs.rating, function (value) {
                    for (var i = 0 ; i < value ; i++) {
                        html += img;
                    }
                    element.html(html);
                });
            }
        };
    })

;
