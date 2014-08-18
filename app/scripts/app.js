/*jshint unused: vars */
define([
    'angular',
    'text!../views/open-account/open.html',
    'open-account/controllers/open',
    'open-account/services/open-ser',
    'common/directives/tooltip',
    'common/services/config',
    'common/services/data-setting',
    'common/services/check'
], function (
    angular,
    openAccountTpl,
    openAccountCtrl,
    openAccountSer,
    tooltipDirective,
    config,
    dataSetting,
    checkSer
) {
'use strict';
return angular.module('tiger', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]).config(function ($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
        template: openAccountTpl,
        controller: openAccountCtrl
    });

    // 全局 $http 请求配置。
    $httpProvider
    .interceptors.push(function(wdConfig, $location) {
        return {
            'request': function(config) {
                config.timeout = wdConfig.httpTimeout;
                if (!/^[http|https]/.test(config.url)) {
                    config.url = wdConfig.apiUrl + config.url;
                }
                return config;
            },
            'response': function(response) {
                return response.data;
            },
            'responseError': function(response) {
                // if (response.status === 403 || response.status === 404) {
                    // $location.path('/auth');
                // }
                return response;
            }
        };
    });
})
.directive('wdTooltip', tooltipDirective)
.factory('wdOpenAccount', openAccountSer)
.factory('wdConfig', config)
.factory('wdDataSetting', dataSetting)
.factory('wdCheck', checkSer);

});
