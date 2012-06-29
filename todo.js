var todoApp = angular.module('todoApp', ['ngResource']);

todoApp.controller('AppCtrl', function AppCtrl($scope) {

  // define userName model


  // define items model


  // publish it on scope



  // computed property
  $scope.remaining = function() {
    return items.reduce(function(count, item) {
      return item.done ? count : count + 1;
    }, 0);
  };


  // event handler
  $scope.add = function(newItem) {
    var item = {text: newItem.text, done: false};
    items.push(item);
    newItem.text = '';
  };


  // event handler
  $scope.archive = function() {
    items = $scope.items = items.filter(function(item) {
      return !item.done;
    });
  };
});
