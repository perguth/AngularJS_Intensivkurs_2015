module.exports = function () {
  var angular = require('angular'),
    list;

  this.get = function () {
    if (!list) {
      list = angular.fromJson(localStorage.getItem('Tasks')) || [];

      if (!list) {
        list = [];
      }
    }

    return list;
  };

  this.set = function (task) {
    list.push(task);
    this.save();
  };

  this.save = function () {
    localStorage.setItem('Tasks', angular.toJson(list));
  };

  this.delete = function (index) {
    list.splice(index, 1);
    this.save();
  };
};