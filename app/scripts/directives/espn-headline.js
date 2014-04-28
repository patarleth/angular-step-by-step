'use strict';

angular.module('stepByStepApp')
  .directive('espnHeadline', function () {
    return {
      templateUrl: 'views/directives/espn-headline.html',
      scope: {
         headline: '='
      },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log('espnHeadline directive link function called');
      }
    };
  });
