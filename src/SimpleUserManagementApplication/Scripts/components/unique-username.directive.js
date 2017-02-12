(function () {
    'use strict';

    angular
        .module('userApp')
        .directive('uniqueUsername', uniqueUsername);

    uniqueUsername.$inject = ['isUsernameAvailable'];

    function uniqueUsername(isUsernameAvailable) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function ($scope, element, attrs, ngModel) {
                ngModel.$asyncValidators.unique = isUsernameAvailable;
            }
        }
    }

})();
