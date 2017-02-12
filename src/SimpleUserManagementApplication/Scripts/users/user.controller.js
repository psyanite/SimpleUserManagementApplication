(function () {
    'use strict';

    angular
        .module('userApp')
        .controller('UserListController', UserListController)
        .controller('UserAddController', UserAddController)
        .controller('UserEditController', UserEditController)
        .controller('UserEditPasswordController', UserEditPasswordController)
        .controller('UserDeleteController', UserDeleteController)
        .controller('UserLoginController', UserLoginController);

    /* User List Controller  */
    UserListController.$inject = ['User'];

    function UserListController(User) {
        var vm = this;
        vm.users = User.query();

        vm.limitOptions = [5, 10, 15];

        vm.query = {
            order: 'UserId',
            limit: 5,
            page: 1
        };

        vm.filter = {
            userid: '',
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            mobile: ''
        };

    }

    /* User Create Controller */
    UserAddController.$inject = ['$location', 'User'];

    function UserAddController($location, User) {
        var vm = this;
        vm.user = new User();
        vm.add = add;

        vm.patterns = {
            emailPattern: /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/,
            passwordPattern: /(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}$/
        };

        function add() {
            vm.user.$save(function success() {
                $location.path('/');
            }, function error() {
                $location.path('/error');
            });
        };
    }

    /* User Edit Controller */
    UserEditController.$inject = ['$routeParams', '$location', 'User'];

    function UserEditController($routeParams, $location, User, $http) {
        var vm = this;
        vm.user = User.get({ id: $routeParams.id });
        vm.edit = edit;

        vm.patterns = {
            emailPattern: /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/,
        };

        function edit() {
            vm.user.$update({ id: vm.user.UserId }, function success() {
                $location.path('/');
            }, function error() {
                $location.path('/error');
            });
        };
    }

    /* User Edit Password Controller */
    UserEditPasswordController.$inject = ['$routeParams', '$location', 'User'];

    function UserEditPasswordController($routeParams, $location, User, $http) {
        var vm = this;
        vm.user = User.get({ id: $routeParams.id }, function () {
            vm.user.Password = '';
        });
        vm.edit = edit;

        vm.patterns = {
            passwordPattern: /(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}$/
        };

        function edit() {
            vm.user.$update({ id: vm.user.UserId }, function success() {
                $location.path('/');
            }, function error() {
                $location.path('/error');
            });
        };
    }

    /* User Delete Controller  */
    UserDeleteController.$inject = ['$routeParams', '$location', 'User'];

    function UserDeleteController($routeParams, $location, User) {
        var vm = this;
        vm.user = User.get({ id: $routeParams.id });
        vm.remove = remove;

        function remove() {
            vm.user.$remove({ id: vm.user.UserId }, function success() {
                $location.path('/');
            }, function error() {
                $location.path('/error');
            });
        };
    }

    /* User Login Controller */
    UserLoginController.$inject = ['$location', 'authenticateUser', '$http', '$route'];

    function UserLoginController($location, authenticateUser, $http, $route) {
        var vm = this;
        
        vm.credentials = { 'Username': '', 'Password': '' };
        vm.login = login;

        function login() {
            authenticateUser(vm.credentials).then(function success(data) {
                vm.username = vm.credentials.Username;
                console.log(data);
                if (data.success) {
                    alert('Correct username and password provided')
                } else {
                    alert(data.message)
                };
            }, function error() {
                $location.path('/error');
            });
           
        };
    }

})();