'use strict';

/**
 * @ngdoc overview
 * @name superlistApp
 * @description
 * # superlistApp
 *
 * Main module of the application.
 */
angular
  .module('superlistApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/todos', {
        templateUrl: 'views/todos.html',
        controller: 'TodosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('superlistApp')
  .factory('Todo', ['$resource', function($resource) {
    return $resource('/api/todos/:id.json', null, {
      'update': { method: 'PUT'}
    });
  }]);