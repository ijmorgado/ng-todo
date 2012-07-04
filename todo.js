var todoApp = angular.module('todoApp', ['ngResource']);

todoApp.controller('AppCtrl', function AppCtrl($scope) {

  // define userName model
  $scope.userName = 'Igor';


  // define items model
  var items = [
    {text: 'Make AngularJS Awesome', done: false, minion: 'Miško'},
    {text: 'Help Brad write ToDo App', done: true, minion: 'Brad'}
  ];


  // publish it on scope
  $scope.items = items;


  // computed property
  $scope.remaining = function() {
    return items.reduce(function(count, item) {
      return item.done ? count : count + 1;
    }, 0);
  };


  // event handler
  $scope.add = function(newItem) {
    var item = {
      text: newItem.text,
      minion: newItem.minion,
      done: false
    };
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
