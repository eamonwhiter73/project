'use strict';

angular.module('appApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
