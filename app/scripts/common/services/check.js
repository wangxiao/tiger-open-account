define([
], function(
) {
'use strict';
return ['$rootScope', function($rootScope) {

    return {
        checkCN: function(str) {
            var reg = /^[\u4e00-\u9fa5]+$/g;
            return reg.test(str);
        }
    };
    // 结束 
}];
});
