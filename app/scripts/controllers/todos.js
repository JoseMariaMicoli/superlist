'use strict';

/**
 * @ngdoc function
 * @name superlistApp.controller:TodosCtrl
 * @description
 * # TodosCtrl
 * Controller to Todos of the superlistApp 
 */
angular.module('superlistApp')
  .controller('TodosCtrl', function ($scope) {
    $scope.todos = [
      {name: 'Primeiro item da lista'},
      {name: 'Segundo item'},
      {name: 'Mais um item na lista'},
      {name: 'One other thing to do'}
    ];

    $scope.addTodo = function () {
  		$scope.todos.push($scope.todo);
  		$scope.todo = '';
	};

	$scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });
