angular.module("setupIndex")
.directive('welcome', function () {
    return {
        restrict: 'E',
        scope: {
            message:'@'
        },
        templateUrl: 'App/Welcome/welcome.html',
        controller: 'welcomeController'
    };
})