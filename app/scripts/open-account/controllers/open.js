define([
    'jquery',
    'underscore'
], function(
    $,
    _
) {
'use strict';
return ['$scope',
function openCtrl($scope) {
    $scope.change = false;
    $scope.test = function() {
        $scope.change = true;
    };
}];
});
