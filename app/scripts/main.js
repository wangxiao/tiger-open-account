/*jshint unused: vars */
require.config({
    paths: {
        text: '../../bower_components/requirejs-text/text',
        jquery: '../../bower_components/jquery/dist/jquery',
        underscore: '../../bower_components/underscore/underscore',
        angular: '../../bower_components/angular/angular',
        templates: '../views',
        'angular-cookies': '../../bower_components/angular-cookies/angular-cookies',
        'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
        'angular-resource': '../../bower_components/angular-resource/angular-resource',
        'angular-route': '../../bower_components/angular-route/angular-route',
        'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
        'angular-scenario': '../../bower_components/angular-scenario/angular-scenario',
        tooltip: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip',
        modal: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal',
        'requirejs-text': '../../bower_components/requirejs-text/text',
        affix: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix',
        alert: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert',
        button: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button',
        carousel: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel',
        collapse: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse',
        dropdown: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown',
        tab: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab',
        transition: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition',
        scrollspy: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy',
        popover: '../../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
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
        },
        tooltip: {
            deps: [
                'jquery'
            ]
        },
        modal: {
            deps: [
                'jquery'
            ]
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
    'jquery',
    'angular',
    'app',
    'angular-route',
    'angular-cookies',
    'angular-sanitize',
    'angular-resource',
    'tooltip',
    'modal',
    'text'
], function(jquery, angular, app, ngRoutes, ngCookies, ngSanitize, ngResource) {
    'use strict';
    /* jshint ignore:start */
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    /* jshint ignore:end */
    angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
    });
});
