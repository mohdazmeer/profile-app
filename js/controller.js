/*global angular*/
var profileControllers = angular.module('profileControllers', ['ngMap']);
profileControllers.controller('ListController', function ($scope, $http) {
    'use strict';
    $http.get('data/profiles.json').then(function (response) {
        $scope.profiles = response.data;
    });
});
profileControllers.controller('DetailsController', function ($scope, $http, $routeParams) {
    'use strict';
    $http.get('data/profiles.json').then(function (response) {
        $scope.profiles = response.data;
        $scope.indexId = $routeParams.indexId;
    });
});