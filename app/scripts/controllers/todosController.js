'use strict';

/**
 * @ngdoc function
 * @name superlistApp.controller:TodosCtrl
 * @description
 * # TodosCtrl
 * Controller to Todos of the superlistApp 
 */
angular.module('superlistApp')
  .controller('TodosCtrl', function ($scope, Todo) {
    $scope.todos = Todo.query();
    $scope.todo = {};

    $scope.addTodo = function () {
      Todo.save({todo: $scope.todo}).$promise.then(function(data){
        if(data.response){
          angular.copy({}, $scope.todo);
          $scope.settings.success = "Allo! Allo!"
        }
      })
      $scope.todos.push($scope.todo);
      $scope.todo = {};
	  };

	$scope.removeTodo = function (index) {
      Todo.remove({id: $scope.todos[index].id}, function(){
        $scope.todos.splice(index, 1);
      });
    };
  });