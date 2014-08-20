define([
        'text!templates/common/footer.html'
    ], function(
        template
    ) {
'use strict';
return [function() {
    return {
        restrict: 'A',
        template: template,
        scope: true,
        replace: true,
        controller: ['$scope', 
        function($scope) {
        }],
        link: function($scope, $element, $attrs, $controller) {
        }
    };
}];
});
