/*global angular*/
var profileApp = angular.module('profileApp', ['ngRoute', 'angular.filter', 'profileControllers']);
profileApp.config(['$routeProvider', function($routeProvider) {
    'use strict';
    $routeProvider.when('/list', {
        templateUrl: 'template/list.html',
        controller: 'ListController'
    }).when('/details/:indexId', {
        templateUrl: 'template/details.html',
        controller: 'DetailsController'
    }).otherwise({
        redirectTo: '/list'
    });
}]);