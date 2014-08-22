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
            function ask() {
                $scope.$emit('beforeunload');
                return '关闭提示';
            }
            $(window).on('beforeunload', ask);
            $scope.$on('$destroy', function() {
                $(window).off('beforeunload', ask);
            });
        }
    };
}];
});
