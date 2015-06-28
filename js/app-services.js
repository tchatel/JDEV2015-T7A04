"use strict";

angular.module('app-services', [])

    .value('pageInfo', {
        title: "Bookstore"
    })

    .value('sortOptions', [
        {expression: 'price',  reverse: false, label: "Prix croissant"},
        {expression: 'price',  reverse: true,  label: "Prix décroissant"},
        {expression: 'title',  reverse: false, label: "Titre"},
        {expression: 'rating', reverse: true, label: "Note décroissante"}
    ])

    .factory('state', function () {
        var cache = {};
        return function (viewId, initialValue) {
            return cache[viewId] || (cache[viewId] = initialValue);
        };
    })

;