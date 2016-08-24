// jscs:disable
'use strict';

angular.module('asfTemplateApp')
  .factory('loadForms', function($q, $http, baseUrl){

    var service = {
      getUserSchema : getUserSchema,
      getUserForms : getUserForms,
      getUsers : getUsers
    };

    return service;

    function getUserSchema(){
      var url = baseUrl + '/schemas?callback=JSON_CALLBACK';
      return fetch(url);
    }

    function getUserForms(){
      var url = baseUrl + '/forms?callback=JSON_CALLBACK';
      return fetch(url);
    }

    function getUsers(){
      var url = baseUrl + '/users?callback=JSON_CALLBACK';
      return fetch(url);
    }

    function fetch(url){
      var deferred = $q.defer();
      $http.jsonp(url)
        .success(function(data) {
          console.log('success requesting "' + url + '"');
          if (data) {
              deferred.resolve(data);
            } else {
              deferred.reject(data);
            }
        })
        .error(function() {
          console.log('error requesting "' + url + '"');
          deferred.reject();
        });
      return deferred.promise;
    }
  });
