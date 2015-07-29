(function () {
  var angular = require('angular');


  angular.module('todo-app.tasks', []);
  angular.module('todo-app', ['todo-app.tasks'])
    .controller('TaskCtrl', require('./controllers/TaskCtrl.js'));


}());