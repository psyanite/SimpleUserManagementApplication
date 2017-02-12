(function () {
    'use strict';

    angular.module('userApp', [
        'md.data.table', 'ngRoute', 'ngMaterial', 'ngMessages', 'userService'
    ]).config(config);

    config.$inject = ['$routeProvider', '$locationProvider', '$mdThemingProvider'];

    function config($routeProvider, $locationProvider, $mdThemingProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/Views/list.html',
                controller: 'UserListController',
                controllerAs: 'userList'
            })
            .when('/user/add', {
                templateUrl: '/Views/add.html',
                controller: 'UserAddController',
                controllerAs: 'userAdd'
            })
            .when('/user/edit/:id', {
                templateUrl: '/Views/edit.html',
                controller: 'UserEditController',
                controllerAs: 'userEdit'
            })
            .when('/user/editpassword/:id', {
                templateUrl: '/Views/edit-password.html',
                controller: 'UserEditPasswordController',
                controllerAs: 'userEditPassword'
            })
            .when('/user/delete/:id', {
                templateUrl: '/Views/delete.html',
                controller: 'UserDeleteController',
                controllerAs: 'userDelete'
            })
            .when('/user/login', {
                templateUrl: '/Views/login.html',
                controller: 'UserLoginController',
                controllerAs: 'userLogin'
            })
            .when('/error', {
                templateUrl: '/Views/error.html',
                controller: 'ErrorController'
            });
        
        $routeProvider.otherwise({redirectTo: '/'})

        $locationProvider.html5Mode(true);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('deep-orange');

        $mdThemingProvider.theme('dark')
            .primaryPalette('blue')
            .accentPalette('deep-orange')
            .backgroundPalette('blue-grey');
    }

})();