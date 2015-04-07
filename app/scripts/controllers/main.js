'use strict';

/**
 * @ngdoc function
 * @name superlistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the superlistApp
 */
angular.module('superlistApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
