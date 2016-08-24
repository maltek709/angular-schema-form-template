'use strict';

/**
 * @ngdoc overview
 * @name asfTemplateApp
 * @description
 * # asfTemplateApp
 *
 *
 * var baseUrl = 'http://127.0.0.1:3000/db?callback=JSON_CALLBACK';
 *
 * Main module of the application.
 */
angular
  .module('asfTemplateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'schemaForm'
  ])
  .value('baseUrl', 'http://127.0.0.1:3000')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'userCtrl',
        controllerAs: 'vm',
        resolve: {
          forms: function(loadForms){
              return loadForms.getUserForms();
          },
          schema: function(loadForms){
            return loadForms.getUserSchema();
          },
          users: function(loadForms){
            return loadForms.getUsers();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
