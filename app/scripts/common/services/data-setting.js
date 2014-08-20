define([
    'underscore'
], function(
    _
) {
'use strict';
return ['$rootScope', '$http',
function($rootScope, $http) {
    var years = [];
    var i, l, key;
    for (i = 1960, l = 2014; i <= l; i ++) {
        years.push({
            key: String(i),
            value: i
        });
    }
    var months = [];
    for (i = 1, l = 12; i <= l; i ++) {
        key = String(i);
        if (i < 10) {
            key = '0' + key;
        }
        months.push({
            key: key,
            value: i
        });
    }
    var days = [];
    for (i = 1, l = 31; i <= l; i ++) {
        key = String(i);
        if (i < 10) {
            key = '0' + key;
        }
        days.push({
            key: key,
            value: i
        });
    }

    return {
        countrys: [
            {key: '中国', value: 0},
            {key: '中国香港', value: 1},
            {key: '台湾地区', value: 2},
            {key: '中国澳门', value: 3}
        ],
        idKinds: [
            {key: '中国居民身份证', value: 0},
            {key: '中国护照/港澳通行证', value: 1},
            {key: '中国香港居民身份证', value: 2},
            {key: '其他国家/地区护照', value: 3}
        ],
        employments: [
            {key: '在职', value: 0},
            {key: '私营', value: 1},
            {key: '退休', value: 2},
            {key: '其他', value: 3}
        ],
        years: years,
        months: months,
        days: days,
        pinyin: function(cnString) {
            return $http.post('/utils/han2pinyin', {
                hans: cnString
            });
        },
        filterUi: function(data) {
            var obj = _.clone(data);
            for (var k in obj) {
                if (String(k).indexOf('ui') === 0) {
                    delete obj[k];
                }
            }
            return obj;
        }
    };
    // 结束 
}];
});
