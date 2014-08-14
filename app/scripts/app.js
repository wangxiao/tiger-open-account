/*jshint unused: vars */
define([
    'angular',
    'text!../views/open-account/open.html',
    'open-account/controllers/open',
    'common/directives/tooltip'
], function (
    angular,
    openAccountTpl,
    openAccountCtrl,
    tooltipDirective
) {
'use strict';
return angular.module('tiger', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]).config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        template: openAccountTpl,
        controller: openAccountCtrl
    });
}).directive('wdTooltip', tooltipDirective);

});
