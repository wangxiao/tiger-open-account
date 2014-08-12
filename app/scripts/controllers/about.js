define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name tigerOpenAccountApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the tigerOpenAccountApp
   */
  angular.module('tigerOpenAccountApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
