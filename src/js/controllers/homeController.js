'use strict';

var ngModule = angular.module('app.controllers.home', ['app.services.users']);

ngModule.controller('homeCtrl', ['$scope', 'userService', function($scope, userService){

  var vm = this;

  vm.users = userService.getUsers().then(function(res){
    console.log(res);
  });


}]);
