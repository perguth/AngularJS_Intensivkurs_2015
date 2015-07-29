(function () {
  var angular = require('angular');

  angular.module('todo-app.tasks', [])
    .service('TaskService', require('./services/TaskService.js'));
  angular.module('todo-app', ['todo-app.tasks'])
    .controller('TaskCtrl', require('./controllers/TaskCtrl.js'));


}());