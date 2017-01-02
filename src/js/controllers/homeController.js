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
