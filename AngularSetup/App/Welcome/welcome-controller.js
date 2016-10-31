angular.module('setupIndex')
    .controller('welcomeController', ['$scope', function ($scope) {
        $scope.appmessage = $scope.message + ' Unit Test';

        $scope.add = function () {
            return $scope.A + $scope.B;
        }
}])