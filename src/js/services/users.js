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

  api.deleteUser = function(id) {
    var endpoint = URL_PATH + '/delete/' + id;

    return $http.get(endpoint, {}).then(function onSuccess (res){
      console.log('user deleted');
      return res;
    }, function onFail(err){
      console.log('failed'); 
      return err;
    });
  };


  return api;
}]);