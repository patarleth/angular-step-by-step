'use strict';

angular.module('stepByStepApp')
  .controller('MainCtrl', function ($scope,espn) {
    espn.espnnow().then(
      function(result) {
        $scope.espnnow = result;
      },
      function(err) {
        console.log(err);
      }
    );
  });
