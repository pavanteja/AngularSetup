describe('Module Init Test', function () {

    beforeEach(module('setupIndex'));
    beforeEach(module('ngRoute'));

    describe('Welcome Controller Test 1', function () {
        var $controller;
        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));
        it('should print welcome message', function () {
            var $scope = {};
            $scope.message = 'Welcome Message';
            var controller = $controller('welcomeController', { $scope: $scope });
            expect($scope.appmessage).toBe('Welcome Message Unit Test');
        });

        it('should add two numbers and return sum', function () {
            var $scope = {};
            $scope.A = 5;
            $scope.B = 10;
            var controller = $controller('welcomeController', { $scope: $scope });
            expect($scope.add()).toBe(15);
        });
    });

    describe('Welcome Controller Test 2', function () {
        var $controller;
        beforeEach(inject(function (_$controller_) {
            $controller = _$controller_;
        }));
        it('should print welcome message', function () {
            var $scope = {};
            $scope.message = 'Welcome Message';
            var controller = $controller('welcomeController', { $scope: $scope });

            expect($scope.appmessage).toBe('Welcome Message Unit Test');
        });
    });


});