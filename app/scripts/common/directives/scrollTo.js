define([
    'jquery'
], function(
    $
) {
'use strict';
return [function() {
    return {
        restrict: 'A',
        scope: false,
        replace: false,
        controller: ['$scope', 
        function($scope) {            
        }],
        link: function($scope, $element, $attrs, $controller) {
            $scope.$on('scrollTo', function(e, data) {
                $('body').animate({
                    scrollTop: data.top
                }, 300);
            });
        }
    };
}];
});


