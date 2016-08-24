'use strict';

/**
 * @ngdoc function
 * @name asfTemplateApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the asfTemplateApp
 */
angular.module('asfTemplateApp')
  .controller('userCtrl', function ($scope, forms, schema, users, postData) {
    var vm = this;

    /*loadForms.getUserSchema()
      .then(function(data){
        vm.schema = data[0];
        vm.schema2 = data[1];
      });*/
      vm.schema = schema[0];
      vm.schema2 = schema[1];

    /*loadForms.getUsers()
      .then(function(data){
        vm.users = data;
      });*/
      vm.users = users;

    /*loadForms.getUserForms()
      .then(function(data){
        vm.form = data.form;
        vm.form2 = data.formDefault;
      });*/
    vm.form = forms.form;
    vm.form2 = forms.formDefault;  

    vm.model = {},
    vm.model2 = {};

    vm.onSubmit = function(form) {
      // First we broadcast an event so all fields validate themselves
      $scope.$broadcast('schemaFormValidate');

      // Then we check if the form is valid
      if (form.$valid) {

        loadForms.getUsers()
          .then(function(data){
            var max_id = data.length + 1;
            var name = vm.model.name;
            var title = vm.model.title;
            vm.output = title + ' ' + name + ' was here!';
            var user = {"id": max_id, "name": name,"title": title};
            postData.addNewUser(user);
            vm.users.push(user);
          });
      }
    };
  });
