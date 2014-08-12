/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about']/*deps*/, function (angular, MainCtrl, AboutCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name tigerOpenAccountApp
   * @description
   * # tigerOpenAccountApp
   *
   * Main module of the application.
   */
  return angular
    .module('tigerOpenAccountApp', ['tigerOpenAccountApp.controllers.MainCtrl',
'tigerOpenAccountApp.controllers.AboutCtrl',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
    // 'ngAnimate',
    // 'ngTouch'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
