module.exports = function ($scope, TaskService) {
  var task = require('../classes/task.js');

  $scope.newTask = new task();
  $scope.taskList = TaskService.get();


  $scope.addTask = function () {
    TaskService.set($scope.newTask);
    $scope.newTask = new task();
  };
}