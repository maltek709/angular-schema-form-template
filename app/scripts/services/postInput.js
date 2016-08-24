// jscs:disable
'use strict';

angular.module('asfTemplateApp')
  .factory('postData', function($q, $http, baseUrl){

    var service = {
      addNewUser : addNewUser,
      addNewRole : addNewRole
    };

    return service;

    function addNewUser(data){
      var url = baseUrl + '/users'
      return post(url, data);
    }

    function addNewRole(){

    }

    function post(url, data){
      $http.post(url, data)
        .success(function(){
          console.log(data + ' added to ' + url);
        })
        .error(function(){
          console.log(data + ' not added!')
        });
    }
});
