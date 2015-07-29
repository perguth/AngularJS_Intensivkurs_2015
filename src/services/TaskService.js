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

  this.delete = function (id) {
    var index = 0;
    for (index = 0; index < list.length; index++) {
      if (list[index].id === id) {
        break;
      }
    }

    if (index === list.length) {
      return;
    }

    list.splice(index, 1);
    this.save();
  };

  this.clear = function () {
    list.splice(0, list.length);
    this.save();
  };
};