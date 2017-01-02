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