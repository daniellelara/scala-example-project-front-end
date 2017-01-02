'use strict';

var ngModule = angular.module('app.controllers.home', ['app.services.users']);

ngModule.controller('homeCtrl', ['$scope', 'userService', function($scope, userService){

  var vm = this;

  vm.users = userService.getUsers().then(function(res){
    console.log(res);
  });


}]);

var ngModule = angular.module('app.services.users', []);

var URL_PATH = 'http://localhost:8080/proxy/localhost:9000';
var ALL = '/json';

ngModule.service('userService', ['$http', function($http){
  var api = {};

  api.getUsers = function () {
    var endpoint = URL_PATH + ALL;
    return $http.get(endpoint, {}).then(function(res){
      return res.data;
    });
  };


  return api;
}]);
'use strict';

var ngModule = angular.module('scala-fe', ['app.controllers.home']);

ngModule.run(['$rootScope', function ($rootScope) {

    // -- initial state

    console.log('up and running and change again');
}]);