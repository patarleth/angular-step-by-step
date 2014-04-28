'use strict';

angular.module('stepByStepApp')
  .controller('TeamsCtrl', function ($scope,$routeParams,espn) {
    if( $routeParams.id ) {
      espn.mlbteam($routeParams.id).then(
        function(result) {
          $scope.mlbteam = result;
        },
        function(err) {
          console.log(err);
        }
      );
    } else {
      espn.allmlb().then(
        function(result) {
          $scope.allmlb = result;
        },
        function(err) {
          console.log(err);
        }
      );
    }
  });
