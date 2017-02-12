(function () {
    'use strict';

    angular
        .module('userService', ['ngResource'])
        .factory('User', User);

    User.$inject = ['$resource'];

    function User($resource) {
        return $resource('/api/users/:id', null, {
            'update': { method: 'PUT' }
        });
    }
})();

(function () {
    'use strict';

    angular
        .module('userService')
        .factory('isUsernameAvailable', isUsernameAvailable)

    isUsernameAvailable.$inject = ['$q', '$http']

    function isUsernameAvailable($q, $http) {
        return function (username) {
            var deferred = $q.defer();

            $http.get('/api/users/username/' + username).then(function successCallback() {
                deferred.reject();
            }, function errorCallback() {
                deferred.resolve();
            });

            return deferred.promise;
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('userService')
        .factory('authenticateUser', authenticateUser)

    authenticateUser.$inject = ['$http']

    function authenticateUser($http) {
        return function (credentials) {
            return $http.post('/api/login', credentials).then(function (data) {
                return data.data;
            }, function errorCallback() {
                return { success: 'false' };
            });
        }
    };
})();
