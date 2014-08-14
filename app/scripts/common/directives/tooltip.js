define([
    'jquery'
], function(
    $
) {
'use strict';
return [function() {
    return {
        restrict: 'A',
        scope: true,
        replace: true,
        controller: ['$scope',
        function($scope) {
        }],
        link: function($scope, $element, $attrs, $controller) {
            var ele = $($element);
            ele.on('mouseover', function() {
                ele.tooltip('show');
            });
        }
    };
}];
});
