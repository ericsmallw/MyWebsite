/// <reference path="_app.ts" />
module myApp {
    'use strict'
    var websiteApp = angular.module("websiteApp", ['ngRoute', 'controllerModule']);

    websiteApp.config([<any>'$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "/areas/main/main.html",
            controller: "mainCtrl"
        }).when('/about', {
            templateUrl: "/areas/about/about.html",
            controller: 'aboutCtrl'
        }).otherwise({
            redirectTo: '/'
        })
    }]);
}