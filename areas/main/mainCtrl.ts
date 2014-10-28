/// <reference path="../../scripts/global/_app.ts" />

module myApp{
    'use strict'

    interface IMainScope extends ng.IScope {
        title: string;
    }

    export class MainCtrl {
        public static $inject = ['$scope'];

        constructor($scope:IMainScope) {
            $scope.title = "Main";
        }
    }

    controllerModule.controller("mainCtrl", MainCtrl);
}
