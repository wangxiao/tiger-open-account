define([
], function(
) {
'use strict';
return ['$rootScope', '$http',
function($rootScope, $http) {

    return {
        // 开户接口
        openAccount: function(data) {
            return $http.post('/account/register_detailed', data);
        },
        // 用来统计未填写完的用户
        openPartAccount: function(data) {
            return $http.post('/account/register_collector', data);
        }
    };
    // 结束 
}];
});
