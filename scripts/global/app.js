/// <reference path="_app.ts" />
var myApp;
(function (myApp) {
    'use strict';
    var websiteApp = angular.module("websiteApp", ['ngRoute', 'controllerModule']);
    websiteApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "/areas/main/main.html",
            controller: "mainCtrl"
        }).when('/about', {
            templateUrl: "/areas/about/about.html",
            controller: 'aboutCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    }]);
})(myApp || (myApp = {}));
//# sourceMappingURL=app.js.map