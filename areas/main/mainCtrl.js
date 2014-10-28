/// <reference path="../../scripts/global/_app.ts" />
var myApp;
(function (myApp) {
    'use strict';
    var MainCtrl = (function () {
        function MainCtrl($scope) {
            $scope.title = "Main";
        }
        MainCtrl.$inject = ['$scope'];
        return MainCtrl;
    })();
    myApp.MainCtrl = MainCtrl;
    myApp.controllerModule.controller("mainCtrl", MainCtrl);
})(myApp || (myApp = {}));
//# sourceMappingURL=mainCtrl.js.map