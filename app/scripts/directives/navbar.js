'use strict';

angular.module('superlistApp').directive('navbar', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/_navbar.html',
		controller: 'NavigationCtrl'
	};
});
