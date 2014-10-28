/// <reference path="../../scripts/global/_app.ts" />
var myApp;
(function (myApp) {
    var AboutCtrl = (function () {
        function AboutCtrl($scope) {
            $scope.title = "About";
        }
        AboutCtrl.$inject = ['$scope'];
        return AboutCtrl;
    })();
    myApp.controllerModule.controller("aboutCtrl", AboutCtrl);
})(myApp || (myApp = {}));
//# sourceMappingURL=aboutCtrl.js.map