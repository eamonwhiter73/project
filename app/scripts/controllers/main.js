'use strict';

angular.module('appApp')
  .controller('MainCtrl', function ($scope, $http) {

  	$scope.update = function() {
	  $http.get('/api/awesomeThings').success(function(awesomeThings) {
	  	$scope.awesomeThings = awesomeThings;
	  });
	}

    $scope.removeadd = function(thing) {
      var index = $scope.awesomeThings.indexOf(thing);
      var putty = $scope.awesomeThings[index];
      putty.putt = true;
      $scope.awesomeThings.splice(index, 1, putty);
    }

    $scope.putback = function(thing) {
      var index = $scope.awesomeThings.indexOf(thing);
      var putty = $scope.awesomeThings[index];
      putty.putt = false;
      $scope.awesomeThings.splice(index, 1, putty);
    }

    $scope.update();
  });
