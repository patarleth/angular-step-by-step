'use strict';

angular.module('stepByStepApp')
  .controller('HeadlinesCtrl', function ($scope,espn) {
    espn.espnnow().then(
      function(result) {
        $scope.espnnow = result;
      },
      function(err) {
        console.log(err);
      }
    );
  });
