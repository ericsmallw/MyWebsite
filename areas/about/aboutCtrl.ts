/// <reference path="../../scripts/global/_app.ts" />

module myApp{
    interface IAboutScope extends ng.IScope {
        title: string;
    }

    class AboutCtrl {
        public static $inject = ['$scope'];

        constructor($scope:IAboutScope) {
            $scope.title = "About";
        }
    }

    controllerModule.controller("aboutCtrl", AboutCtrl);
}
