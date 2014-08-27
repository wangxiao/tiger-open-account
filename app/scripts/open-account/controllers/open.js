define([
    'jquery',
    'underscore'
], function(
    $,
    _
) {
'use strict';
return ['$scope', 'wdOpenAccount', 'wdDataSetting', 'wdCheck', '$timeout',
function openCtrl($scope, wdOpenAccount, wdDataSetting, wdCheck, $timeout) {
    
    // 当前的进度，一共分为 4 步
    $scope.step = 1;
    $scope.idKindsOptions = wdDataSetting.idKinds;
    $scope.countrysOptions = wdDataSetting.countrys;
    $scope.employmentsOptions = wdDataSetting.employments;
    $scope.years = wdDataSetting.years;
    $scope.months = wdDataSetting.months;
    $scope.days = wdDataSetting.days;
    // 首页的 tab
    $scope.tab = 1;
    $scope.userData = {
        nameCn: '',
        nameEn: '',
        mobile: '',
        email: '',
        // 0 只开证券账户，1 只开期货账户， 2 两个都开。
        accountType: 0,
        country: 0,
        // 证件类型
        idKind: 0,
        idValue: '',
        // 签发机构，xxx 公安局
        issueDepart: '',
        // 0 男，1 女，2 其他
        sex: 0,
        birthday: '',
        // 就业状况
        employment: 0,
        // 常住地址
        address: '',
        // 通讯地址
        sendAddress: '',
        // ui 相关
        // 证券
        uiIsSecurity: true,
        // 期货 
        uiIsFutures: false,
        uiCountry: $scope.countrysOptions[0],
        uiIdKind: $scope.idKindsOptions[0],
        uiEmployment: $scope.employmentsOptions[0],
        uiYear: $scope.years[25],
        uiMonth: $scope.months[6],
        uiDay: $scope.days[15],
        uiAccept: true,
        uiNameCnError: '',
        uiNameCnRight: false,
        uiNameEnError: '',
        uiNameEnRight: false,
        uiMobileError: '',
        uiMobileRight: false,
        uiEmailError: '',
        uiEmailRight: false,
        uiIdValueError: '',
        uiIdValueRight: false,
        uiIssueDepartError: '',
        uiIssueDepartRight: false,
        uiAddressError: '',
        uiAddressRight: false,
        uiSendAddressError: '',
        uiSendAddressRight: false
    };

    $scope.choseSex = function(value) {
        $scope.userData.sex = value;
    };

    function filter() {
        $scope.userData.country = $scope.userData.uiCountry.value;
        $scope.userData.idKind = $scope.userData.uiIdKind.value;
        $scope.userData.employment = $scope.userData.uiEmployment.value;
        $scope.userData.nameEn = $scope.userData.nameEn.toUpperCase();
        if ($scope.userData.uiMonth.value < 10) {
            $scope.userData.uiMonth.value = '0' + $scope.userData.uiMonth.value;
        }
        if ($scope.userData.uiDay.value < 10) {
            $scope.userData.uiDay.value = '0' + $scope.userData.uiDay.value;
        }
        $scope.userData.birthday = $scope.userData.uiYear.value + '-' + $scope.userData.uiMonth.value + '-' + $scope.userData.uiDay.value;
        if ($scope.userData.uiIsSecurity && $scope.userData.uiIsFutures) {
            $scope.userData.accountType = 2;
        } else if ($scope.userData.uiIsSecurity && !$scope.userData.uiIsFutures) {
            $scope.userData.accountType = 0;
        } else if (!$scope.userData.uiIsSecurity && $scope.userData.uiIsFutures) {
            $scope.userData.accountType = 1;
        }
        return wdDataSetting.filterUi($scope.userData);
    }

    $scope.nextStep = function() {
        switch ($scope.step) {
            case 1:
                scrollTop();
                $scope.step ++;
                $scope.checkNameCn();
            break;
            case 2:
                if ($scope.checkNameCn() &&
                 $scope.checkNameEn() && 
                 $scope.checkMobile() && 
                 $scope.checkEmail() && 
                 $scope.checkIdValue() && 
                 $scope.checkIssueDepart() && 
                 $scope.checkAddress() && 
                 $scope.checkSendAddress()) {
                    scrollTop();
                    $timeout(function() {
                        $scope.step ++;
                    }, 350);
                    submitAccount();
                }
            break;
        }
    };
    function submitAccount() {
        var obj = filter();
        console.log(obj);
        wdOpenAccount.openAccount(obj).then(function(data) {
            console.log(data);
        });
    }
    function recordAccount() {
        var obj = filter();
        console.log(obj);
        wdOpenAccount.openPartAccount(obj).then(function(data) {
            console.log(data);
        });        
    }
    $scope.focusNameCn = function() {
        $scope.userData.uiNameCnError = '';
        $scope.userData.uiNameCnRight = false;
    };
    $scope.checkNameCn = function() {
        if (!$scope.userData.nameCn) {
            $scope.userData.uiNameCnError = '请填写中文姓名';
        } else if (!wdCheck.checkCN($scope.userData.nameCn)) {
            $scope.userData.uiNameCnError = '只能填写中文';
        } else {
            $scope.userData.uiNameCnRight = true;
            wdDataSetting.pinyin($scope.userData.nameCn).then(function(data) {
                if (!$scope.userData.nameEn) {
                    _.each(data.pinyin, function(v) {
                        $scope.userData.nameEn += v[0];
                    });
                }
            });
            return true;
        }
    };

    $scope.focusNameEn = function() {
        $scope.userData.uiNameEnError = '';
        $scope.userData.uiNameEnRight = false;
    };
    $scope.checkNameEn = function() {
        if (!$scope.userData.nameEn) {
            $scope.userData.uiNameEnError = '请填写拼音姓名';
        } else if (/[^A-Z|a-z]+/g.test($scope.userData.nameEn)) {
            $scope.userData.uiNameEnError = '有非英文字符';
        } else {
            $scope.userData.uiNameEnRight = true;
            return true;
        }
    };
    $scope.focusMobile = function() {
        $scope.userData.uiMobileRight = false;
        $scope.userData.uiMobileError = '';
    };
    $scope.checkMobile = function() {
        if (!$scope.userData.mobile) {
            $scope.userData.uiMobileError = '请填写手机号码。';
        } else if (/\D/g.test($scope.userData.mobile)) {
            $scope.userData.uiMobileError = '手机号码中有非数字？';
        } else {

            $scope.userData.uiMobileRight = true;
            return true;
        }
    };
    $scope.focusEmail = function() {
        $scope.userData.uiEmailRight = false;
        $scope.userData.uiEmailError = '';
    };
    $scope.checkEmail = function() {
        if (!$scope.userData.email) {
            $scope.userData.uiEmailError = '请填写电子邮件地址。';
        } else if (!/@/g.test($scope.userData.email)) {
            $scope.userData.uiEmailError = '电子邮件中没有 @ 符号？';
        } else if (!/@.+?\..+/g.test($scope.userData.email)) {
            $scope.userData.uiEmailError = '电子邮件格式不对？';
        } else {
            $scope.userData.uiEmailRight = true;
            return true;
        }
    };
    $scope.focusIdValue = function() {
        $scope.userData.uiIdValueRight = false;
        $scope.userData.uiIdValueError = '';
    };
    $scope.checkIdValue = function() {
        if (!$scope.userData.idValue) {
            $scope.userData.uiIdValueError = '请填写证件号码';
        } else if ($scope.userData.uiIdKind.value === 0 && $scope.userData.idValue.length !== 18) {
            $scope.userData.uiIdValueError = '身份证号码位数不对';
        } else {
            $scope.userData.uiIdValueRight = true;
            if ($scope.userData.uiIdKind.value === 0) {
                var str = $scope.userData.idValue;
                var year = str.substr(6, 4);
                var month = str.substr(10, 2);
                var day = str.substr(12, 2);
                $scope.userData.uiYear = _.find($scope.years, function(v) {
                    if (v.key === year) {
                        return true;
                    }
                });
                $scope.userData.uiMonth = _.find($scope.months, function(v) {
                    if (v.key === month) {
                        return true;
                    }
                });
                $scope.userData.uiDay = _.find($scope.days, function(v) {
                    if (v.key === day) {
                        return true;
                    }
                });
                $scope.userData.sex = str.substr(14, 3) % 2 === 1 ? 0 : 1;
            }
            return true;
        }
    };
    $scope.focusIssueDepart = function() {
        $scope.userData.uiIssueDepartRight = false;
        $scope.userData.uiIssueDepartError = '';
    };
    $scope.checkIssueDepart = function() {
        if (!$scope.userData.issueDepart) {
            $scope.userData.uiIssueDepartError = '请填您的' + $scope.userData.uiIdKind.key + '签发机构（证件背面）';
        } else {
            $scope.userData.uiIssueDepartRight = true;
            return true;
        }
    };
    $scope.focusAddress = function() {
        $scope.userData.uiAddressRight = false;
        $scope.userData.uiAddressError = '';
    };
    $scope.checkAddress = function() {
        if (!$scope.userData.address) {
            $scope.userData.uiAddressError = '请填写常住地址';
        } else {
            $scope.userData.uiAddressRight = true;
            return true;
        }
    };
    $scope.focusSendAddress = function() {
        $scope.userData.uiSendAddressRight = false;
        $scope.userData.uiSendAddressError = '';
    };
    $scope.checkSendAddress = function() {
        if (!$scope.userData.sendAddress) {
            $scope.userData.uiSendAddressError = '请填写通讯地址';
        } else {
            $scope.userData.uiSendAddressRight = true;
            return true;
        }
    };
    function scrollTop() {
        $scope.$emit('scrollTo', {
            top: 0
        });
    }
}];
});
