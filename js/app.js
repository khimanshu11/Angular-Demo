(function() {
    var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController', function($scope, $http) {
        $scope.store = this;
        $http.get('store-product.json').success(function(response) {
            $scope.store.products = response;
            data = response;
        });
    });

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);

            this.review = {};
        };
    });
})();