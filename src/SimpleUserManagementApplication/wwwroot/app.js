!function(){"use strict";function a(a,b,c){a.when("/",{templateUrl:"/Views/list.html",controller:"UserListController",controllerAs:"userList"}).when("/user/add",{templateUrl:"/Views/add.html",controller:"UserAddController",controllerAs:"userAdd"}).when("/user/edit/:id",{templateUrl:"/Views/edit.html",controller:"UserEditController",controllerAs:"userEdit"}).when("/user/editpassword/:id",{templateUrl:"/Views/edit-password.html",controller:"UserEditPasswordController",controllerAs:"userEditPassword"}).when("/user/delete/:id",{templateUrl:"/Views/delete.html",controller:"UserDeleteController",controllerAs:"userDelete"}).when("/user/login",{templateUrl:"/Views/login.html",controller:"UserLoginController",controllerAs:"userLogin"}).when("/error",{templateUrl:"/Views/error.html",controller:"ErrorController"}),a.otherwise({redirectTo:"/"}),b.html5Mode(!0),c.theme("default").primaryPalette("blue").accentPalette("deep-orange"),c.theme("dark").primaryPalette("blue").accentPalette("deep-orange").backgroundPalette("blue-grey")}angular.module("userApp",["md.data.table","ngRoute","ngMaterial","ngMessages","userService"]).config(a),a.$inject=["$routeProvider","$locationProvider","$mdThemingProvider"]}(),function(){"use strict";function a(a){return{restrict:"A",require:"ngModel",link:function(b,c,d,e){e.$asyncValidators.unique=a}}}angular.module("userApp").directive("uniqueUsername",a),a.$inject=["isUsernameAvailable"]}(),function(){"use strict";function a(){}angular.module("userApp").controller("ErrorController",a)}(),function(){"use strict";function a(a){var b=this;b.users=a.query(),b.limitOptions=[5,10,15],b.query={order:"UserId",limit:5,page:1},b.filter={userid:"",username:"",firstname:"",lastname:"",email:"",phone:"",mobile:""}}function b(a,b){function c(){d.user.$save(function(){a.path("/")},function(){a.path("/error")})}var d=this;d.user=new b,d.add=c,d.patterns={emailPattern:/^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/,passwordPattern:/(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}$/}}function c(a,b,c,d){function e(){f.user.$update({id:f.user.UserId},function(){b.path("/")},function(){b.path("/error")})}var f=this;f.user=c.get({id:a.id}),f.edit=e,f.patterns={emailPattern:/^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/}}function d(a,b,c,d){function e(){f.user.$update({id:f.user.UserId},function(){b.path("/")},function(){b.path("/error")})}var f=this;f.user=c.get({id:a.id},function(){f.user.Password=""}),f.edit=e,f.patterns={passwordPattern:/(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}$/}}function e(a,b,c){function d(){e.user.$remove({id:e.user.UserId},function(){b.path("/")},function(){b.path("/error")})}var e=this;e.user=c.get({id:a.id}),e.remove=d}function f(a,b,c,d){function e(){b(f.credentials).then(function(a){f.username=f.credentials.Username,console.log(a),a.success?alert("Correct username and password provided"):alert(a.message)},function(){a.path("/error")})}var f=this;f.credentials={Username:"",Password:""},f.login=e}angular.module("userApp").controller("UserListController",a).controller("UserAddController",b).controller("UserEditController",c).controller("UserEditPasswordController",d).controller("UserDeleteController",e).controller("UserLoginController",f),a.$inject=["User"],b.$inject=["$location","User"],c.$inject=["$routeParams","$location","User"],d.$inject=["$routeParams","$location","User"],e.$inject=["$routeParams","$location","User"],f.$inject=["$location","authenticateUser","$http","$route"]}(),function(){"use strict";function a(a){return a("/api/users/:id",null,{update:{method:"PUT"}})}angular.module("userService",["ngResource"]).factory("User",a),a.$inject=["$resource"]}(),function(){"use strict";function a(a,b){return function(c){var d=a.defer();return b.get("/api/users/username/"+c).then(function(){d.reject()},function(){d.resolve()}),d.promise}}angular.module("userService").factory("isUsernameAvailable",a),a.$inject=["$q","$http"]}(),function(){"use strict";function a(a){return function(b){return a.post("/api/login",b).then(function(a){return a.data},function(){return{success:"false"}})}}angular.module("userService").factory("authenticateUser",a),a.$inject=["$http"]}();