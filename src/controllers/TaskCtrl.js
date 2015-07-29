module.exports = function ($scope, TaskService) {
  var task = require('../classes/task.js');

  $scope.newTask = new task();
  $scope.taskList = TaskService.get();
  $scope.displayFilter = false;


  $scope.addTask = function () {
    TaskService.set($scope.newTask);
    $scope.newTask = new task();
  };

  $scope.check = function () {
    TaskService.save();
  };

  $scope.delete = function (index) {
    TaskService.delete(index);
  };

  $scope.taskFilter = function (elem) {
    return !(elem.completed && $scope.displayFilter);
  };
};