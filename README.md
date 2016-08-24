# asf-template

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

### Create project using yo angular generator
* Create new folder `mkdir asf-project`
* Change into directory `cd asf-project`
* Run yo angular `yo angular asf-template`
* Install angular-schema-form `bower install angular-schema-form --save` (`--save` adds dependencies to bower.json)
* Run `bower install` to install dependencies

### Using asf in your angularjs project

First add module `schemaForm` to your main module dependencies

```javascript
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
```

Define schema, form and model inside an controller

```javascript
angular.module('asfTemplateApp')
  .controller('userCtrl', function ($scope, forms, schema, users, postData) {
    var vm = this;

    vm.schema = {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "minLength": 2,
          "title": "Name",
          "description": "Name or alias"
        },
        "title": {
          "type": "string",
          "enum": [
            "Dr",
            "Jr",
            "Sir",
            "Mrs",
            "Mr",
            "NaN",
            "Dj"
          ]
        }
      }
    };

    vm.form = [
      "*",
      {
        "type": "submit",
        "title": "Save"
      }
    ];

    vm.model = {};
```

Now bind schema, form and model to view like this

```html
<div>
    <form name="myForm"
          sf-schema="vm.schema"
          sf-form="vm.form"
          sf-model="vm.model"
    </form>
</div>
```

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
