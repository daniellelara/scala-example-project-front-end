'use strict';

var ngModule = angular.module('scala-fe', ['app.controllers.home']);

ngModule.run(['$rootScope', function ($rootScope) {

    // -- initial state

    console.log('up and running and change again');
}]);