/*global angular*/
var profileControllers = angular.module('profileControllers', ['ngMap', 'angular.filter']);
profileControllers.controller('ListController', function($scope, $http) {
    'use strict';
    $http.get('data/profiles.json').then(function(response) {
        $scope.profiles = response.data;
        $scope.nameOrder = "full_name";
    });
});
profileControllers.controller('DetailsController', function($scope, $http, $routeParams) {
    'use strict';
    $http.get('data/profiles.json').then(function(response) {
        $scope.profiles = response.data;
        $scope.indexId = $routeParams.indexId;
    });
});