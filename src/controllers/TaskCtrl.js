module.exports = function ($scope) {
  var task = require('../classes/task.js');

  $scope.newTask = new task();
  $scope.taskList = [];

  $scope.addTask = function () {
    $scope.taskList.push($scope.newTask);
    $scope.newTask = new task();
  };
}