define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name tigerOpenAccountApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the tigerOpenAccountApp
   */
  angular.module('tigerOpenAccountApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
