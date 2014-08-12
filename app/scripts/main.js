/*jshint unused: vars */
require.config({
  paths: {
    angular: '../../bower_components/angular/angular',
    'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
    'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
    'angular-resource': '../../bower_components/angular-resource/angular-resource',
    'angular-route': '../../bower_components/angular-route/angular-route',
    'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
    'angular-scenario': '../../bower_components/angular-scenario/angular-scenario'
    // affix: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix',
    // alert: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert',
    // button: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button',
    // carousel: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel',
    // collapse: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse',
    // dropdown: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown',
    // tab: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab',
    // transition: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition',
    // scrollspy: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy',
    // modal: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal',
    // tooltip: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip',
    // popover: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-route': [
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'angular-mocks': {
      deps: [
        'angular'
      ],
      exports: 'angular.mock'
    }
  },
  priority: [
    'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'angular',
  'app',
  'angular-route',
  'angular-cookies',
  'angular-sanitize',
  'angular-resource'
], function(angular, app, ngRoutes, ngCookies, ngSanitize, ngResource) {
  'use strict';
  /* jshint ignore:start */
  var $html = angular.element(document.getElementsByTagName('html')[0]);
  /* jshint ignore:end */
  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });
});
