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
        replace: false,
        controller: ['$scope', 
        function($scope) {
        }],
        link: function($scope, $element, $attrs, $controller) {
            var ele = $($element).addClass('wd-grow-bar');
            var top = ele.offset().top;
            var checkShow = function() {
                if ($(window).scrollTop() + $(window).height() > top) {
                    setTimeout(function() {
                        ele.width($attrs.growNum);
                    }, 800);
                }
            };
            checkShow();
            $(window).scroll(function() {
                checkShow();
            });
        }
    };
}];
});
