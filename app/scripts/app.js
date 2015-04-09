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