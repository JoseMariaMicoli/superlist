angular.module('superlistApp')
  .factory('Todo', ['$resource', function($resource) {
    return $resource('/api/todos/:id.json', {id: '@id'}, {
      'update': { method: 'PUT'}
    });
  }]);