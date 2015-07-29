module.exports = function ($scope, TaskService, $timeout) {
  var task = require('../classes/task.js'), lastTaskID = 0;

  $scope.newTask = new task();
  $scope.taskList = TaskService.get();
  $scope.displayFilter = false;

  $scope.addTask = function () {
    TaskService.set($scope.newTask);
    var oldTask = $scope.newTask;
    $timeout(function () {
      oldTask.small = false;
    }, 500);
    $scope.newTask = new task();
    $scope.newTask.id = ++lastTaskID;
  };

  $scope.check = function () {
    TaskService.save();
  };

  $scope.delete = function (id) {
    $timeout(function () {
      TaskService.delete(id);
      $scope.$digest(); //TODO: THIS WORKS BUT WHY
    }, 500, false);
  };

  $scope.clear = function () {
    TaskService.clear();
  };

  $scope.taskFilter = function (elem) {
    return !(elem.completed && $scope.displayFilter);
  };

  // $scope.clear();
};