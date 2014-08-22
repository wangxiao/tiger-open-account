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
            var ele = $($element).addClass('wd-lazy-show');
            var delay = $attrs.delay || 0;
            var top = ele.offset().top;
            var flag = false;
            var checkShow = function() {
                if ($(window).scrollTop() + $(window).height() > top + 200) {
                    flag = true;
                    setTimeout(function() {
                        ele.addClass('animated fadeInUp');
                    }, delay);
                    setTimeout(function() {
                        ele.removeClass('wd-lazy-show animated fadeInUp');
                    }, delay + 1000);
                }
            };
            checkShow();
            $(window).scroll(function() {
                if (!flag) {
                    checkShow();
                }
            });
        }
    };
}];
});
