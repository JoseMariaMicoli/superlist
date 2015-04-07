'use strict';

/**
 * @ngdoc function
 * @name superlistApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the superlistApp
 */
angular.module('superlistApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
