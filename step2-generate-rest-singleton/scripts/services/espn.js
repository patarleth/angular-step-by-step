'use strict';

angular.module('stepByStepApp')
  .factory('espn', function ($resource) {
// http://api.espn.com/v1/now?apikey=v37fddaw8ge4knf8yqq7nnd9
    var espnNowResource = $resource(
      'http://api.espn.com/v1/now?apikey=v37fddaw8ge4knf8yqq7nnd9',
      {callback:'JSON_CALLBACK'},
      {get:{method:'JSONP'}});

    var espnnow = function() {
      return espnNowResource.get({}).$promise;
    };

    // Public API here
    return {
      espnnow: function () {
        return espnnow();
      }
    };
  });
