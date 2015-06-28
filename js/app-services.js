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

    .value('cart', {
        rows: {},
        add: function (book) {
            if (this.rows[book.isbn10]) {
                this.rows[book.isbn10].quantity++;
            } else {
                this.rows[book.isbn10] = {
                    book: book,
                    quantity: 1
                };
            }
        },
        remove: function (row) {
            delete this.rows[row.book.isbn10];
        },
        total: function () {
            var self = this;
            return Object.keys(this.rows).reduce(function (result, id) {
                var row = self.rows[id];
                return result + row.book.price * row.quantity;
            }, 0);
        },
        empty: function () {
            return Object.keys(this.rows).length == 0;
        }

    })

;
