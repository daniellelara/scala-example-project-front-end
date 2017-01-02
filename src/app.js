'use strict';

var ngModule = angular.module('app.controllers.home', ['app.services.users']);

ngModule.controller('homeCtrl', ['$scope', 'userService', function($scope, userService){

  var vm = this;


  vm.newUser = {
    id: 0
  };

  vm.submitUser = function() {
    userService.addUser(vm.newUser).then(function() {
      return userService.getUsers().then(function(users){
        vm.users = users;
      }); 
    });
  }; 

  userService.getUsers().then(function(users){
    vm.users = users;
  });


}]);

var ngModule = angular.module('app.services.users', []);

var URL_PATH = 'http://localhost:9000';
var ALL = '/json';
var ADD = '/adduser';

ngModule.service('userService', ['$http', function($http){
  var api = {};

  api.getUsers = function () {
    var endpoint = URL_PATH + ALL;
    return $http.get(endpoint, {}).then(function(res){
      return res.data;
    });
  };

  api.addUser = function(user) {
    var endpoint = URL_PATH + ADD;
    var newUser = JSON.stringify(user);
    var req = {
     method: 'POST',
     url: endpoint,
     headers: {
       'Content-Type': 'application/json'
     },
     data: newUser
    };

    return $http(req).then(function successCallback(response) {
      return response
    }, function(error){
      return error;
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