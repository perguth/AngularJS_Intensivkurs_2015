var angular = require('angular')

var tasks = angular.module('todo-app.tasks', [])
var todoAppModule = angular.module('todo-app',
  ['todo-app.tasks'])
