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

    /* teams */
    var allMlbTeamsResource = $resource(
      'http://api.espn.com/v1/sports/baseball/mlb/teams?apikey=v37fddaw8ge4knf8yqq7nnd9',
      {callback:'JSON_CALLBACK'},
      {get:{method:'JSONP'}});

    var allmlb = function() {
      return allMlbTeamsResource.get({}).$promise;
    };

    /* team */
    var mlbTeamResource = $resource(
      'http://api.espn.com/v1/sports/baseball/mlb/teams/:id?apikey=v37fddaw8ge4knf8yqq7nnd9',
      {id:'@id', callback:'JSON_CALLBACK'},
      {get:{method:'JSONP'}});

    var mlbteam = function(teamId) {
      return mlbTeamResource.get({id:teamId}).$promise;
    };

    // Public API here
    return {
      espnnow: function () {
        return espnnow();
      },
      allmlb: function() {
        return allmlb();
      },
      mlbteam: function(teamId) {
        return mlbteam(teamId);
      }
    };
  });
