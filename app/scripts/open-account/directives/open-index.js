define([
        'text!templates/open-account/open-index.html'
    ], function(
        template
    ) {
'use strict';
return [function() {
    return {
        restrict: 'A',
        template: template,
        scope: false,
        replace: true,
        controller: ['$scope', 
        function($scope) {
        }],
        link: function($scope, $element, $attrs, $controller) {
        }
    };
}];
});
