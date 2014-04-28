'use strict';

angular.module('stepByStepApp')
  .directive('mlbTeam', function () {
    return {
      templateUrl: 'views/directives/mlb-team.html',
      scope: {
        team: '='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log('mlbTeam directive link function called');
      }
    };
  });
